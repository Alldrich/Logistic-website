/** @type {import('next').NextConfig} */
import withBundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzerConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = withBundleAnalyzerConfig({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-d4510ea23efe4dfda8bbe952a1118ca5.r2.dev',
        port: '',
        pathname: '/**',
      },
    ],
  },
})

export default nextConfig
