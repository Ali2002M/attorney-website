import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/practice-areas", destination: "/skills", permanent: true },
      { source: "/practice-areas/:slug*", destination: "/skills", permanent: true },
      { source: "/articles", destination: "/", permanent: true },
      { source: "/articles/:slug*", destination: "/", permanent: true },
      { source: "/news", destination: "/", permanent: true },
      { source: "/news/:slug*", destination: "/", permanent: true },
      { source: "/documents", destination: "/", permanent: true },
      { source: "/documents/:slug*", destination: "/", permanent: true },
      { source: "/book", destination: "/contact", permanent: true },
      { source: "/book/:slug*", destination: "/contact", permanent: true },
      { source: "/calculators", destination: "/", permanent: true },
      { source: "/calculators/:slug*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
