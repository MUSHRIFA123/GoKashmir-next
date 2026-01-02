/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/place',
        destination: '/things-to-do',
        permanent: true, // 308
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
  images: {
    domains: ['upload.wikimedia.org'], // Add external image hosts here
  },
};

module.exports = nextConfig;
