import { fetchPageSeo, fetchWebsiteSeo } from "./fetchSeo";
import { getStructuredData } from "./toMetadata";

type SeoStructuredDataProps = {
  /** Use website-level SEO (homepage). Default: page SEO for `path`. */
  mode?: "website" | "page";
  path?: string;
  fallbackTitle?: string;
};

/**
 * Renders JSON-LD from the SEO API (Nexus Head script equivalent).
 * Safe no-op when the API returns nothing — falls back to a basic WebPage schema.
 */
export default async function SeoStructuredData({
  mode = "page",
  path = "/",
  fallbackTitle,
}: SeoStructuredDataProps) {
  const result =
    mode === "website" ? await fetchWebsiteSeo() : await fetchPageSeo(path);
  const structuredData = getStructuredData(result, fallbackTitle);

  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
