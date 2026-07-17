import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ... you may have other config here ...

  // Add this line to allow your IP address
  allowedDevOrigins: ['192.168.56.1'],
};

export default nextConfig;