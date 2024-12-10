import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ironusa.vtexassets.com',
      },
      {
        protocol: 'https',
        hostname: 'static.miraheze.org',
      },
      {
        protocol: 'https',
        hostname: 'static.wikia.nocookie.net',
      },
    ],
  },
};

export default nextConfig;
