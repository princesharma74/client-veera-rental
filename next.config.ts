import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [new URL(process.env.NEXT_PUBLIC_API_URL || '').hostname].filter(Boolean),
  },
  eslint: {
    ignoreDuringBuilds: true,
},
};

export default nextConfig;
