import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 
  reactStrictMode: true,
  swcMinify: true,
  output: process.env.NEXT_PUBLIC_STATIC === "true" ? "export" : undefined, // Use static export if needed
};

export default nextConfig;
