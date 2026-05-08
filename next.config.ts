import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**"
      }
    ]
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.nasaemployees.com"
          }
        ],
        destination: "https://nasaemployees.com/:path*",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
