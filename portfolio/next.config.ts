import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure trailing slash behavior
  trailingSlash: false,
  
  // Configure output for static export if needed
  output: 'standalone',
  
  // Ensure proper asset handling
  assetPrefix: '',
  
  // Enable react strict mode
  reactStrictMode: true,
};

export default nextConfig;