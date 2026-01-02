/** @type {import('next').NextConfig} */
const nextConfig = {
  // Redirect rules
  async redirects() {
    return [
      {
        source: '/place',
        destination: '/things-to-do',
        permanent: true, // 308 redirect
      },
      {
        source: '/locality',
        destination: '/things-to-do',
        permanent: true,
      },
      {
        source: '/things-to-do/food-and-drink/local-cuisine-bangalore',
        destination: '/things-to-do/food-and-drink/local-dishes-bangalore',
        permanent: true,
      },
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
