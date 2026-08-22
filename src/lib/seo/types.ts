export type SeoOpenGraph = {
  title?: string;
  description?: string;
  imageUrl?: string;
  type?: string;
};

export type SeoTwitter = {
  title?: string;
  description?: string;
  imageUrl?: string;
  cardType?: string;
};

export type SeoPayload = {
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  focusKeyword?: string;
  canonicalUrl?: string;
  robotsMeta?: string;
  noindex?: boolean;
  nofollow?: boolean;
  openGraph?: SeoOpenGraph;
  twitter?: SeoTwitter;
  schemaMarkup?: string;
  raw?: Record<string, unknown>;
};

export type SeoApiData = {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  images?: string[];
  seo?: SeoPayload;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
  label?: string;
  name?: string;
  url?: string;
};

export type SeoFetchResult = {
  seoData: SeoApiData | null;
  canonicalUrl: string;
  path: string;
};

export type SeoFallback = {
  title?: string;
  description?: string;
  keywords?: string | string[];
};
