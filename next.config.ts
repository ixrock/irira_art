import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // import files as inline SVG-components (XML)
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
