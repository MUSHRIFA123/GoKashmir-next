module.exports = {
  async redirects() {
    return [
      {
        source: '/place',
        destination: '/things-to-do',
        permanent: true, // Use true for a permanent redirect (308), false for temporary (307)
      },
      {
        source: '/locality',
        destination: '/things-to-do',
        permanent: true, // Use true for a permanent redirect (308), false for temporary (307)
      },
      {
        source: '/things-to-do/food-and-drink/local-cuisine-bangalore',
        destination: '/things-to-do/food-and-drink/local-dishes-bangalore',
        permanent: true, // Use true for a permanent redirect (308), false for temporary (307)
      },
    ];
  },
};