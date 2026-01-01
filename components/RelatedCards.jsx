export default function Home() {
  const cards = [
    {
      title: "Top Attractions",
      description: "Must-See Spots",
      image: "/img/Herocards/attractions.jpg",
      link: "/attractions", // replace with actual URL or route
    },
    {
      title: "Best Restaurants",
      description: "Must-Try Eateries",
      image: "/img/Herocards/restaurants.jpg",
      link: "/restaurants",
    },
    {
      title: "Shopping",
      description: "Shop Till Drop",
      image: "/img/Herocards/shopping.jpg",
      link: "/shoppings",
    },
    {
      title: "Culture and Heritage",
      description: "Heritage Highlights Here",
      image: "/img/Herocards/culture.jpg",
      link: "/culture-and-heritage",
    },
  ];

  return (
    <section className="flex flex-col justify-center max-w-7xl min-h-screen px-4 py-10 mx-auto sm:px-6">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-8 flex-wrap">
        <h2 className="text-4xl font-bold leading-none md:text-5xl">
          Related Categories
        </h2>
        <a
          href="/categories"
          className="mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600"
        >
          View all →
        </a>
      </div>

      {/* Cards */}
      <div className="flex justify-between gap-6 flex-wrap sm:flex-nowrap">
        {cards.map((card, i) => (
          <a
            key={i}
            href={card.link} // card is now clickable
            className="relative isolate flex flex-col justify-end overflow-hidden rounded-xl w-full sm:w-1/4 h-[350px] group"
          >
            <img
              src={card.image}
              alt={card.title}
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
            <h3 className="z-10 mt-3 text-xl font-bold text-white pl-3">{card.title}</h3>
            <p className="z-10 text-sm leading-6 text-gray-300 pl-3">{card.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
