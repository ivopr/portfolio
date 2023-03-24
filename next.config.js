/* eslint-disable @typescript-eslint/no-var-requires */
const { withContentlayer } = require("next-contentlayer")

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["placekitten.com", "ivo.vist.gg"],
  },
}

module.exports = withContentlayer(nextConfig)
