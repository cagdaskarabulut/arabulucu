// const generateRobotsTxtAndSitemapXml = require("./scripts/generate-robots-txt");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;

module.exports = {
  // reactStrictMode: false,
  // webpack5: true,
  images: {
    domains: ["127.0.0.1","localhost","arabulucu.info","https://arabulucu-ten.vercel.app"],
    unoptimized: true
  },
  webpack(config, { isServer }) {
    config.resolve.fallback = { fs: false };
    if (isServer) {
      // generateRobotsTxtAndSitemapXml();
    }
    return config;
  },
};
