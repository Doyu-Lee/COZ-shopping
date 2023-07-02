/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: process.env.NODE_ENV === "development",
  reactStrictMode: process.env.NODE_ENV === "development",
};

module.exports = nextConfig;
