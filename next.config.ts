import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Optional: Set trailingSlash true for better compatibility with GitHub Pages
  trailingSlash: true,
};

export default nextConfig;