import type { NextConfig } from "next";

const recipeDomain = process.env.NEXT_RECIPES_API_DOMAIN;

if (!recipeDomain) {
  throw new Error("NEXT_RECIPES_API_DOMAIN is not defined in your .env file");
}

const nextConfig: NextConfig = {
  images: {
    domains: [recipeDomain]
  },
  env: {
    NEXT_RECIPES_API_URL: process.env.NEXT_RECIPES_API_URL,
  },
};

export default nextConfig;

