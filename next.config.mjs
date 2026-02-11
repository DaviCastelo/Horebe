import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cf.bstatic.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 't-cf.bstatic.com',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
