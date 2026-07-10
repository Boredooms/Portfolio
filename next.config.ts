import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel deployment — no static export needed (Vercel handles Next.js natively)
  reactStrictMode: false,
  env: {
    googleAnalyticsId: process.env.NODE_ENV === "production" ? process.env.GA_MEASUREMENT_ID : "",
  },
  // Enable image optimization for Vercel
  images: {
    unoptimized: false,
  },
};

export default nextConfig;
