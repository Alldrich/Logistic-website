/** @type {import('next').NextConfig} */
import withBundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzerConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = withBundleAnalyzerConfig({
  swcMinify: true,
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
  experimental:{
    typedRoutes:true,
    optimizePackageImports:['@radix-ui/react-dropdown-menu','@radix-ui/react-icons','@radix-ui/react-label','@radix-ui/react-slot','@hookform/resolvers','react-hook-form'],
  }
})

export default nextConfig
