import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Base path if deploying to a subdirectory (update if needed)
  // basePath: '/foundergc',

  // Trailing slash for static export compatibility
  trailingSlash: true,
};

export default nextConfig;
