const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['i.scdn.co'],
  },
  env: {
    GITHUB_URL: process.env.GITHUB_URL,
    MEDIUM_URL: process.env.MEDIUM_URL,
    RAINDROP_URL: process.env.RAINDROP_URL,
    RAINDROP_TOKEN: process.env.RAINDROP_TOKEN,
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
    SPOTIFY_REFRESH_TOKEN: process.env.SPOTIFY_REFRESH_TOKEN,
    SPOTIFY_NOW_PLAYING_ENDPOINT: process.env.SPOTIFY_NOW_PLAYING_ENDPOINT,
    SPOTIFY_TOKEN_ENDPOINT: process.env.SPOTIFY_TOKEN_ENDPOINT,
    NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    NEXT_PUBLIC_GA_TRACKING_ID: process.env.NEXT_PUBLIC_GA_TRACKING_ID,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    SITE_URL: process.env.SITE_URL,
  },
})
