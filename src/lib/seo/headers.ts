import {
  SEO_API_BASE_URL,
  SEO_APP_LABEL,
  SEO_CLIENT_NAME,
} from "./config";

export function getSeoApiHeaders(extra: Record<string, string> = {}) {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    label: SEO_APP_LABEL,
    clientname: SEO_CLIENT_NAME,
    ...extra,
  };
}

export function seoApiUrl(endpoint: string) {
  const path = endpoint.replace(/^\//, "");
  return `${SEO_API_BASE_URL}${path}`;
}
