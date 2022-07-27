const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      'www.simplilearn.com',
      'cdn-images-1.medium.com',
      'i.scdn.co',
      'github.com',
      'raw.githubusercontent.com',
    ],
  },
  env: {
    RAINDROP_TOKEN: process.env.RAINDROP_TOKEN,
  },
})
