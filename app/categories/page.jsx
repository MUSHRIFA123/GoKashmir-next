"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ListingHero from "@/components/ListingHero";
import Link from "next/link";
import RelatedCards from "@/components/RelatedCards";
import Head from "next/head";

const categories = [
  {
    title: "Top Attractions",
    description: "Discover Kashmir’s most famous sightseeing places.",
    image: "/img/Herocards/attractions.jpg",
    link: "/attractions",
  },
  {
    title: "Restaurants",
    description: "Explore the best local and popular restaurants in Kashmir.",
    image: "/img/Herocards/restaurants.jpg",
    link: "/restaurants",
  },
  {
    title: "Culture & Heritage",
    description: "Experience Kashmir’s rich traditions and heritage.",
    image: "/img/Herocards/culture.jpg",
    link: "/culture-and-heritage",
  },
  {
    title: "Shopping",
    description: "Find the best markets and shopping destinations.",
    image: "/img/Herocards/shopping.jpg",
    link: "/shoppings",
  },
  {
    title: "Seasons & Weather",
    description: "Understand the climate and best time to visit Kashmir.",
    image: "/img/Herocards/season.jpg",
    link: "/seasons-and-weather",
  },
  {
    title: "Trekking & Adventures",
    description: "Explore trekking trails and adventure activities.",
    image: "/img/Herocards/adventure.jpg",
    link: "/trekkings-and-adventures",
  },
];

export default function Categories() {
  return (
    <>
      <Head>
        <title>
          Explore Kashmir – Attractions, Food, Culture, Shopping & Adventures
        </title>
        <meta
          name="description"
          content="Discover the best of Kashmir in one place! Explore top attractions, restaurants, culture, shopping destinations, seasons, weather, and adventure experiences."
        />
      </Head>

      <Navbar />

      <ListingHero
        title="Explore Kashmir"
        subtitle="Attractions, Food, Culture & Adventures"
        description="Discover the best of Kashmir in one place. Explore beautiful valleys, top tourist attractions, authentic restaurants, cultural experiences, shopping destinations, seasonal beauty, and thrilling adventure activities across the region. From the serene waters of Dal Lake to the breathtaking meadows of Gulmarg and the picturesque landscapes of Pahalgam, Kashmir offers unforgettable experiences for every traveler.Whether you want to enjoy peaceful nature walks, taste traditional Kashmiri cuisine, learn about the region’s rich culture and heritage, or shop for famous handicrafts like pashmina and saffron, this guide helps you discover the most memorable things to see and do. Plan your journey through scenic valleys, historic landmarks, vibrant markets, and adventure-filled destinations to experience the true charm of Kashmir."
        image="/img/attractions/attractions-hero/lal-chowk.jpg"
      />

      <section className="py-20 pt-10 bg-white">
        <div className="container mx-auto px-4">

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">

            {categories.map((cat) => (
              <Link
                key={cat.title}
                href={cat.link}
                className="relative group rounded-xl overflow-hidden aspect-square"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">

                  <div>
                    <h3 className="text-white font-bold text-lg">
                      {cat.title}
                    </h3>

                    <p className="text-sm text-gray-200 mt-1">
                      {cat.description}
                    </p>
                  </div>

                </div>
              </Link>
            ))}

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}