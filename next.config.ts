import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If you're deploying to a GitHub Pages repo that's not username.github.io
  // uncomment and edit the following line:
  // basePath: '/your-repo-name',
};

export default nextConfig;