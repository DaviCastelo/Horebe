/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
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
