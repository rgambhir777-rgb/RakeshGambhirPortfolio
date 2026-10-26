import type { NextConfig } from "next";

// GitHub Pages serves the site under /RakeshGambhir; Hugging Face serves it at the root.
// The Pages workflow sets NEXT_PUBLIC_BASE_PATH, everything else builds for the root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;
