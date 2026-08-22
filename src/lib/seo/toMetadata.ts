import type { Metadata } from "next";
import { company } from "@/data/brandArchitecture";
import { hasCmsSeoFields } from "./fetchSeo";
import type { SeoApiData, SeoFallback, SeoFetchResult } from "./types";

function asKeywords(value?: string | string[]) {
  if (!value) return undefined;
  if (Array.isArray(value)) return value.filter(Boolean);
  const parts = value
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);
  return parts.length ? parts : undefined;
}

function robotsFromSeo(seo?: SeoApiData["seo"]): Metadata["robots"] {
  if (!seo) return undefined;

  if (seo.robotsMeta) {
    return seo.robotsMeta;
  }

  if (seo.noindex || seo.nofollow) {
    return {
      index: !seo.noindex,
      follow: !seo.nofollow,
    };
  }

  return undefined;
}

/**
 * Map oneauto SEO API payload → Next.js Metadata.
 * Prefer CMS fields when present; otherwise keep local page fallbacks
 * (API returns path-as-title when a page SEO row is missing).
 */
export function seoResultToMetadata(
  result: SeoFetchResult,
  fallback: SeoFallback = {}
): Metadata {
  const seo = result.seoData?.seo || {};
  const fromCms = hasCmsSeoFields(result.seoData);
  const title = fromCms
    ? seo.metaTitle || result.seoData?.title || fallback.title || company.shortName
    : fallback.title || seo.metaTitle || result.seoData?.title || company.shortName;
  const description = fromCms
    ? seo.metaDescription || result.seoData?.description || fallback.description || ""
    : fallback.description || seo.metaDescription || result.seoData?.description || "";
  const keywords =
    asKeywords(fromCms ? seo.metaKeywords : undefined) ||
    asKeywords(fromCms ? result.seoData?.keywords : undefined) ||
    asKeywords(fallback.keywords) ||
    asKeywords(seo.metaKeywords) ||
    asKeywords(result.seoData?.keywords);
  const canonicalUrl = result.canonicalUrl || seo.canonicalUrl || undefined;
  const og = seo.openGraph || {};
  const twitter = seo.twitter || {};
  const ogImage = fromCms ? og.imageUrl || result.seoData?.images?.[0] : undefined;
  const twitterImage = fromCms
    ? twitter.imageUrl || ogImage
    : undefined;

  return {
    title,
    description: description || undefined,
    keywords,
    robots: fromCms ? robotsFromSeo(seo) : undefined,
    alternates: canonicalUrl
      ? {
          canonical: canonicalUrl,
        }
      : undefined,
    openGraph: {
      title: (fromCms && og.title) || title,
      description: (fromCms && og.description) || description || undefined,
      url: canonicalUrl,
      siteName: company.name,
      type: ((fromCms && og.type) as "website") || "website",
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
    twitter: {
      card:
        ((fromCms && twitter.cardType) as "summary_large_image") ||
        "summary_large_image",
      title: (fromCms && twitter.title) || title,
      description: (fromCms && twitter.description) || description || undefined,
      images: twitterImage ? [twitterImage] : undefined,
    },
  };
}

export function getStructuredData(result: SeoFetchResult, fallbackTitle?: string) {
  if (result.seoData?.structuredData && hasCmsSeoFields(result.seoData)) {
    return result.seoData.structuredData;
  }

  const seo = result.seoData?.seo || {};
  const fromCms = hasCmsSeoFields(result.seoData);
  const title = fromCms
    ? seo.metaTitle || result.seoData?.title || fallbackTitle || company.shortName
    : fallbackTitle || seo.metaTitle || result.seoData?.title || company.shortName;
  const description = fromCms
    ? seo.metaDescription || result.seoData?.description || undefined
    : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    ...(description ? { description } : {}),
    ...(result.canonicalUrl ? { url: result.canonicalUrl } : {}),
    isPartOf: {
      "@type": "WebSite",
      name: company.name,
      url: company.url,
    },
  };
}
