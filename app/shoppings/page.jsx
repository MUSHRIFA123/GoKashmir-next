"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import RelatedCards from "@/components/RelatedCards";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import Image from 'next/image';

export default function SeasonsAnsWheather() {
  const galleryItems = [
    { title: "Lal Chowk", img: "/img/shoppings/lal-chowk.jpg", href: "/place/shoppings/lal-chowk" },
    { title: "Zaina Kadal Road", img: "/img/shoppings/zaina-kadal-road.jpg", href: "/place/shoppings/zaina-kadal-road" },
    { title: "Kashmir Government Arts Emporium", img: "/img/shoppings/arts-emporium.jpg", href: "/place/shoppings/kashmir-government-arts-emporium" },
    { title: "Floating Vegetable Market", img: "/img/shoppings/floating-vegetable-market.jpg", href: "/place/shoppings/floating-vegetable-market-srinagar" },
    { title: "Polo View Road", img: "/img/shoppings/polo-view-road.jpg", href: "/place/shoppings/polo-view-road" },
    { title: "Residency Road", img: "/img/shoppings/residency-road-srinagar.jpg", href: "/place/shoppings/residency-road-srinagar" },
    { title: "Hazara Arts", img: "/img/shoppings/hazara-arts-srinagar.jpg", href: "/place/shoppings/hazara-arts-srinagar" },
    { title: "Baba Art & Crafts", img: "/img/shoppings/baba-art-and-crafts.jpg", href: "/place/shoppings/baba-art-and-crafts" }
  ];

  const [favorites, setFavorites] = useState([]);

  // Load bucket list from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bucketList")) || [];
    setFavorites(saved);
  }, []);

  const toggleFavorite = (item) => {
    let updated;

    if (favorites.some(fav => fav.title === item.title)) {
      updated = favorites.filter(fav => fav.title !== item.title);
    } else {
      updated = [...favorites, item];
    }

    setFavorites(updated);
    localStorage.setItem("bucketList", JSON.stringify(updated));
  };

  const isFavorite = (title) =>
    favorites.some(fav => fav.title === title);

  return (
    <>
      <Navbar />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-xl text-green-800 font-semibold">
              SHOPPING
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mt-4">
              Shop the Best of Kashmir
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 mt-6 text-lg">
              Explore Kashmir’s vibrant markets and boutiques offering exquisite handicrafts, Pashmina shawls, saffron, dry fruits, and beautifully handcrafted souvenirs.
            </p>
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map((item) => (
              <div
                key={item.title}
                className="relative group rounded-lg overflow-hidden aspect-square"
              >
                {/* ❤️ Favorite Icon */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleFavorite(item);
                  }}
                  className={`absolute top-3 right-3 z-10 p-2 rounded-full transition
                    ${
                      isFavorite(item.title)
                        ? "bg-white/90"
                        : "bg-black/40 hover:bg-black/60"
                    }
                  `}
                >
                  <FaHeart
                    className={`text-xl transition-transform duration-200
                      ${
                        isFavorite(item.title)
                          ? "text-red-500 scale-110"
                          : "text-gray-300"
                      }
                    `}
                  />
                </button>

                {/* Card */}
                <Link href={item.href} className="block w-full h-full">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <h3 className="text-white text-xl font-bold">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Footer actions */}
          <div className="text-center mt-16">
            <button className="px-8 py-3 bg-rose-600 text-white font-medium rounded-lg hover:bg-rose-700 transition-colors shadow-lg">
              Explore more
            </button>

            <RelatedCards />
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
