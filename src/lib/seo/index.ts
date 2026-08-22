export {
  SEO_API_BASE_URL,
  SEO_APP_LABEL,
  SEO_CLIENT_NAME,
  PUBLIC_SITE_ORIGIN,
  seoEndpoints,
} from "./config";
export { getSeoApiHeaders, seoApiUrl } from "./headers";
export {
  fetchSeoSSR,
  fetchPageSeo,
  fetchWebsiteSeo,
} from "./fetchSeo";
export { seoResultToMetadata, getStructuredData } from "./toMetadata";
export { createPageMetadata, createWebsiteMetadata } from "./createMetadata";
export { generateSolutionMetadata } from "./generateSolutionMetadata";
export { default as SeoStructuredData } from "./SeoStructuredData";
export type {
  SeoApiData,
  SeoFallback,
  SeoFetchResult,
  SeoPayload,
} from "./types";
