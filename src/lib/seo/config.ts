/**
 * SEO API config — same oneauto BFF pattern as onechanneladmin-new-ai / Nexus.
 * Override via env for each deployment / website label.
 */
const trimSlash = (value: string) => value.replace(/\/+$/, "");

export const SEO_API_BASE_URL =
  trimSlash(
    process.env.NEXT_PUBLIC_SEO_API_BASE_URL ||
      process.env.SEO_API_BASE_URL ||
      "https://backend.oneauto.us",
  ) + "/";

/** Tenant key used by admin B2B website SEO settings (`label` header + body). */
export const SEO_APP_LABEL =
  process.env.NEXT_PUBLIC_WEBSITE_LABEL ||
  process.env.SEO_APP_LABEL ||
  "onefulfillcenter";

/** Client header required by oneauto BFF (same pattern as Nexus `Client_Name`). */
export const SEO_CLIENT_NAME =
  process.env.NEXT_PUBLIC_CLIENT_NAME ||
  process.env.SEO_CLIENT_NAME ||
  "oneauto";

/** Absolute public origin for canonical / OG URLs (UI route wins over API). */
export const PUBLIC_SITE_ORIGIN = trimSlash(
  process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.PUBLIC_SITE_ORIGIN ||
    "https://onefulfillcenter.com",
);

export const SEO_FETCH_TIMEOUT_MS = Number(
  process.env.SEO_FETCH_TIMEOUT_MS || 10_000,
);

export const seoEndpoints = {
  website: "prod/websiteseodata",
  page: "prod/pageseodata",
} as const;
