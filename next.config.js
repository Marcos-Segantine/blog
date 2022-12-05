/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  source: "/api/:path*",
}

module.exports = nextConfig
