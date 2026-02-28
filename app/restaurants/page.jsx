"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedCards from "@/components/RelatedCards";
import restaurants from "@/data/json/restaurants.json";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";

export default function KashmirRestaurants() {
  const [filter, setFilter] = useState("All");
  const [bucketList, setBucketList] = useState([]);

  const categories = ["All","Cafes", "Fine Dining", "Vegetarian","Kashmiri Cuisine"];

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bucketList")) || [];
    setBucketList(saved);
  }, []);

  const isFavorite = (title) =>
    bucketList.some((item) => item.title === title);

  const toggleFavorite = (restaurant) => {
    let updated;

    if (isFavorite(restaurant.name)) {
      updated = bucketList.filter(
        (item) => item.title !== restaurant.name
      );
    } else {
      updated = [
        ...bucketList,
        {
          title: restaurant.name,
          img: restaurant.image,
          href: `/restaurants/${restaurant.slug}`, 
          type: "restaurant",
        },
      ];
    }

    setBucketList(updated);
    localStorage.setItem("bucketList", JSON.stringify(updated));
  };

  const filteredRestaurants =
    filter === "All"
      ? restaurants.slice(0, 50)
      : restaurants.filter((item) => item.category === filter).slice(0, 50);

  return (
    <>
      <Navbar />

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-emerald-600">
              Best Restaurants in Kashmir
            </h1>
            <p className="text-lg text-gray-600 font-semibold">
              Explore authentic Kashmiri cuisine, cafes & fine dining
            </p>
          </div>

          <div className="flex flex-wrap justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 m-2 rounded text-white transition
                  ${
                    filter === cat
                      ? "bg-emerald-600"
                      : "bg-green-400 hover:bg-emerald-600"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredRestaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                className="group relative shadow-md hover:shadow-xl rounded-lg overflow-hidden"
              >
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleFavorite(restaurant);
                  }}
                  className={`absolute top-3 right-3 z-20 p-2 rounded-full transition
                    ${
                      isFavorite(restaurant.name)
                        ? "bg-white/90"
                        : "bg-black/40 hover:bg-black/60"
                    }`}
                >
                  <FaHeart
                    className={`text-xl transition-transform duration-200
                      ${
                        isFavorite(restaurant.name)
                          ? "text-red-500 scale-110"
                          : "text-gray-300"
                      }`}
                  />
                </button>

                <Link href={`/restaurants/${restaurant.slug}`}>
                  <Image
                    src={restaurant.image}
                    alt={restaurant.name}
                    width={400}
                    height={250}
                    className="w-full h-60 object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-600 opacity-0 group-hover:opacity-70 transition"></div>

                  <div className="absolute bottom-0 w-full p-4 text-center z-10">
                    <h3 className="text-lg font-semibold text-white">
                      {restaurant.name}
                    </h3>
                    <span className="text-sm text-white">
                      {restaurant.category}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedCards title="You may also like" type="restaurants" />
      <Footer />
    </>
  );
}
