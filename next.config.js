/* eslint-disable @typescript-eslint/no-var-requires */
const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["placekitten.com", "play-lh.googleusercontent.com"]
  }
};

module.exports = withContentlayer(nextConfig);
