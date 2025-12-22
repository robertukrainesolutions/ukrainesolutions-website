import type { NextConfig } from "next";

// Studio deployment - NO static export
const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;

