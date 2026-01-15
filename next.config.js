/** @type {import('next').NextConfig} */
const nextConfig = {
  // Redirect rules
  async redirects() {
    return [
      {
        source: '/place',
        destination: '/place',
        permanent: true, // 308 redirect
      }
    ];
  },

  // Image configuration for external hosts
  images: {
    domains: ['upload.wikimedia.org'], // Add external image hosts here
  },

  // Allow using <img> without build errors
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Optional: Future Next.js features
  reactStrictMode: true,
};

module.exports = nextConfig;
