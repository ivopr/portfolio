/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.VERCEL_URL
    ? "https://ivo.vist.gg"
    : "https://localhost:3000",
  generateRobotsTxt: true // (optional)
  // ...other options
};
