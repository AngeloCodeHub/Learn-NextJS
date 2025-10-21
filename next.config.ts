import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // eslint: {
  //   ignoreDuringBuilds: false,
  // },
  // typescript: {
  //   ignoreBuildErrors: false,
  // },
  // images: {
  //   unoptimized: false,
  // },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.xn--djroe106hl2fyz1bszc.online',
        port: '',
        pathname: '/wp-content/uploads/2025/10/**',
      },
    ],
  },
};

export default nextConfig;
