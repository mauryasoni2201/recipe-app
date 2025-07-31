import type { NextConfig } from "next";

const recipeDomain = process.env.NEXT_RECIPES_API_DOMAIN;

if (!recipeDomain) {
  throw new Error("NEXT_RECIPES_API_DOMAIN is not defined in your .env file");
}
const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: recipeDomain?.replace(/^https?:\/\//, '') || '',
      },
    ],
  },
  env: {
    NEXT_RECIPES_API_URL: process.env.NEXT_RECIPES_API_URL,
    NEXT_RECIPES_API_DOMAIN: process.env.NEXT_RECIPES_API_DOMAIN,
    NEXT_RECIPES_WEBISTE_URL: process.env.NEXT_RECIPES_WEBISTE_URL,
    NEXT_GOOGLE_SITE_VERIFICATION: process.env.NEXT_GOOGLE_SITE_VERIFICATION,
  },
};

export default nextConfig;

