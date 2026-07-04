import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "openainime.com" }],
        destination: "https://openaianime.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.openainime.com" }],
        destination: "https://openaianime.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
