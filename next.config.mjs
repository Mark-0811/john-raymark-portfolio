/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  ...(process.env.GITHUB_ACTIONS === 'true' ? {
    basePath: '/john-raymark-portfolio',
    assetPrefix: '/john-raymark-portfolio/',
  } : {}),
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
