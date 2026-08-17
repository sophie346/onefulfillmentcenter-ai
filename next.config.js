const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // SSR/ISR required so admin SEO API changes appear without a full static rebuild.
  // (Nexus uses getServerSideProps for the same reason.)
  output: "standalone",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Prevent Turbopack from mis-detecting the workspace root when multiple
  // lockfiles exist (e.g. package-lock.json + pnpm-lock.yaml).
  turbopack: {
    root: path.resolve(__dirname),
  },
};

module.exports = nextConfig;
