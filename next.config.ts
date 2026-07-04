import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "openanimeai.com" }],
        destination: "https://openanime.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.openanimeai.com" }],
        destination: "https://openanime.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
