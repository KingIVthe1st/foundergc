import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Base path for GitHub Pages subdirectory deployment
  basePath: '/foundergc',

  // Asset prefix for GitHub Pages
  assetPrefix: '/foundergc/',

  // Trailing slash for static export compatibility
  trailingSlash: true,
};

export default nextConfig;
