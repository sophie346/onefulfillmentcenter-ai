import { fetchPageSeo, fetchWebsiteSeo } from "./fetchSeo";
import { seoResultToMetadata } from "./toMetadata";
import type { SeoFallback } from "./types";
import type { Metadata } from "next";

export async function createWebsiteMetadata(
  fallback: SeoFallback = {}
): Promise<Metadata> {
  const result = await fetchWebsiteSeo();
  return seoResultToMetadata(result, fallback);
}

export async function createPageMetadata(
  path: string,
  fallback: SeoFallback = {}
): Promise<Metadata> {
  const result = await fetchPageSeo(path);
  return seoResultToMetadata(result, fallback);
}
