"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import RelatedCards from "@/components/RelatedCards";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import ShoppingGuide from "@/data/json/ShoppingGuide";

export default function AttractionsPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bucketList")) || [];
    setFavorites(saved);
  }, []);

  const toggleFavorite = (item) => {
    const updated = favorites.some(f => f.title === item.title)
      ? favorites.filter(f => f.title !== item.title)
      : [...favorites, item];

    setFavorites(updated);
    localStorage.setItem("bucketList", JSON.stringify(updated));
  };

  const isFavorite = (title) =>
    favorites.some(f => f.title === title);

  return (
    <>
      <Navbar />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-xl text-green-800 font-semibold">
              Top Shopping places
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mt-4">
              Shop the Best of Kashmir
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 mt-6 text-lg">
              Explore Kashmir’s vibrant markets and boutiques offering exquisite handicrafts and souvenirs.
            </p>
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {ShoppingGuide.map((item) => (
              <div
                key={item.slug}
                className="relative group rounded-lg overflow-hidden aspect-square"
              >
                {/* ❤️ Favorite */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleFavorite({
                      title: item.title,
                      img: item.image,
                      href: `/shoppings/${item.slug}`,
                    });
                  }}
                  className={`absolute top-3 right-3 z-10 p-2 rounded-full
                    ${isFavorite(item.title)
                      ? "bg-white/90"
                      : "bg-black/40 hover:bg-black/60"}
                  `}
                >
                  <FaHeart
                    className={`text-xl
                      ${isFavorite(item.title)
                        ? "text-red-500 scale-110"
                        : "text-gray-300"}
                    `}
                  />
                </button>

                {/* Card */}
                <Link href={`/shoppings/${item.slug}`} className="block w-full h-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent
                                  opacity-0 group-hover:opacity-100 transition flex items-end p-6">
                    <h3 className="text-white text-xl font-bold">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="text-center mt-16">
            <Link href="/bucket-list">
              <button className="px-8 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 shadow-lg">
                View Bucket List
              </button>
            </Link>
          </div>

        </div>
      </section>

      <RelatedCards />
      <Footer />
    </>
  );
}
