import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    domains: ["your-image-domain.com"], // Ensure image optimization works
  },
};

export default nextConfig;
