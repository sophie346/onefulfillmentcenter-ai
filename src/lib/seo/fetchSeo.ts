import { PUBLIC_SITE_ORIGIN, SEO_APP_LABEL, SEO_FETCH_TIMEOUT_MS, seoEndpoints } from "./config";
import { getSeoApiHeaders, seoApiUrl } from "./headers";
import type { SeoApiData, SeoFetchResult } from "./types";

/** Canonical URL path for this site (trailing slash, except root). */
export function normalizeUiPath(path?: string | null) {
  const raw = String(path ?? "").trim();
  if (!raw) return "/";
  const withoutQuery = raw.split("?")[0].split("#")[0];
  const withSlash = withoutQuery.startsWith("/")
    ? withoutQuery
    : `/${withoutQuery}`;
  if (withSlash === "/") return "/";
  return withSlash.endsWith("/") ? withSlash : `${withSlash}/`;
}

/**
 * Backend `pageseodata` matches paths exactly (case-insensitive) and does NOT
 * normalize trailing slashes. Admin often stores `/about` while this site uses
 * `/about/` — try both.
 */
export function pageSeoPathCandidates(pathInput: string): string[] {
  const uiPath = normalizeUiPath(pathInput);
  if (uiPath === "/") return ["/"];
  const noSlash = uiPath.replace(/\/+$/, "") || "/";
  const withSlash = `${noSlash}/`;
  return Array.from(new Set([noSlash, withSlash, uiPath]));
}

function absoluteCanonical(path: string) {
  const normalized = normalizeUiPath(path);
  if (normalized === "/") return `${PUBLIC_SITE_ORIGIN}/`;
  return `${PUBLIC_SITE_ORIGIN}${normalized}`;
}

function safeParseJson(text: string, contentType: string | null): unknown {
  const trimmed = String(text || "").trim();
  const looksLikeJson =
    trimmed.startsWith("{") || trimmed.startsWith("[");
  if (!contentType?.includes("application/json") && !looksLikeJson) {
    return null;
  }
  try {
    return JSON.parse(trimmed);
  } catch {
    return null;
  }
}

function hasCmsSeoFields(data: SeoApiData | null): boolean {
  if (!data?.seo) return false;
  const raw = (data.seo.raw || {}) as Record<string, unknown>;
  const pick = (key: string) => {
    const value = raw[key];
    return typeof value === "string" && value.trim().length > 0;
  };
  return Boolean(
    pick("metaTitle") ||
      pick("metaDescription") ||
      pick("metaKeywords") ||
      pick("openGraphTitle") ||
      pick("openGraphDescription") ||
      pick("openGraphImageUrl") ||
      pick("twitterCardTitle") ||
      pick("twitterCardDescription") ||
      pick("twitterCardImageUrl") ||
      pick("canonicalUrl") ||
      pick("schemaMarkup")
  );
}

async function postSeoApi(
  endpoint: string,
  body: Record<string, unknown>
): Promise<SeoApiData | null> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), SEO_FETCH_TIMEOUT_MS);

  try {
    const res = await fetch(seoApiUrl(endpoint), {
      method: "POST",
      headers: getSeoApiHeaders(),
      body: JSON.stringify(body),
      signal: controller.signal,
      // Refresh periodically so admin SEO edits show without a full redeploy.
      next: { revalidate: 60 },
    });

    const bodyText = await res.text();
    const json = safeParseJson(
      bodyText,
      res.headers.get("content-type")
    ) as { error?: boolean; data?: SeoApiData } | null;

    if (!json || json.error || !json.data) return null;
    return json.data;
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[seo] fetch failed", endpoint, body, error);
    }
    return null;
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Homepage / site-level SEO — Nexus `prod/websiteseodata`.
 */
export async function fetchWebsiteSeo(): Promise<SeoFetchResult> {
  const path = "/";
  const canonicalUrl = absoluteCanonical(path);
  const seoData = await postSeoApi(seoEndpoints.website, {
    label: SEO_APP_LABEL,
  });

  if (process.env.NODE_ENV === "development") {
    console.info("[seo] websiteseodata", {
      label: SEO_APP_LABEL,
      hasCmsSeo: hasCmsSeoFields(seoData),
      title: seoData?.seo?.metaTitle || seoData?.title,
    });
  }

  return { seoData, canonicalUrl, path };
}

/**
 * Per-path page SEO — Nexus `prod/pageseodata`.
 */
export async function fetchPageSeo(
  pathInput: string,
  options?: { canonicalPath?: string }
): Promise<SeoFetchResult> {
  const path = normalizeUiPath(options?.canonicalPath || pathInput);
  const canonicalUrl = absoluteCanonical(path);
  const candidates = pageSeoPathCandidates(path);

  let seoData: SeoApiData | null = null;
  for (const candidate of candidates) {
    const result = await postSeoApi(seoEndpoints.page, {
      path: candidate,
      label: SEO_APP_LABEL,
    });
    if (hasCmsSeoFields(result)) {
      seoData = result;
      break;
    }
    if (!seoData) seoData = result;
  }

  return { seoData, canonicalUrl, path };
}

/**
 * Shared SSR helper matching Nexus `fetchSeoSSR` for App Router.
 */
export async function fetchSeoSSR({
  apiPath = seoEndpoints.page,
  body = {},
  canonicalPath,
}: {
  apiPath?: string;
  body?: Record<string, unknown>;
  canonicalPath?: string;
} = {}): Promise<SeoFetchResult> {
  if (apiPath.includes("websiteseodata")) {
    return fetchWebsiteSeo();
  }

  const pathFromBody =
    typeof body.path === "string" ? body.path : canonicalPath || "/";
  return fetchPageSeo(pathFromBody, { canonicalPath });
}

export { hasCmsSeoFields };
