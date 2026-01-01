"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import RelatedCards from "@/components/RelatedCards";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function SeasonsAnsWheather() {
  const galleryItems = [
    { title: "Dal Lake", img: "/img/attractions/dal-lake.jpg", href: "/place/attractions/dal-lake" },
    { title: "Gulmarg", img: "/img/attractions/gulmarg.jpg", href: "/place/attractions/gulmarg" },
    { title: "Pahalgam & Betaab Valley", img: "/img/attractions/pahalgam.jpg", href: "/place/attractions/pahalgam-betaab-valley" },
    { title: "Sonmarg", img: "/img/attractions/sonamarg.jpg", href: "/place/attractions/sonmarg" },
    { title: "Mughal Gardens", img: "/img/attractions/mughal-gardens.jpg", href: "/place/attractions/mughal-gardens" },
    { title: "Tulip Garden Srinagar", img: "/img/attractions/tulip-garden.jpg", href: "/place/attractions/tulip-garden-srinagar" },
    { title: "Aru Valley", img: "/img/attractions/aru-alley.jpg", href: "/place/attractions/aru-valley" },
    { title: "Srinagar", img: "/img/attractions/srinagar.jpg", href: "/place/attractions/srinagar" },
  ];

  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bucketList")) || [];
    setFavorites(saved);
  }, []);

  const toggleFavorite = (item) => {
    let updated;

    if (favorites.some((fav) => fav.title === item.title)) {
      updated = favorites.filter((fav) => fav.title !== item.title);
    } else {
      updated = [...favorites, item];
    }

    setFavorites(updated);
    localStorage.setItem("bucketList", JSON.stringify(updated));
  };

  const isFavorite = (title) =>
    favorites.some((fav) => fav.title === title);

  return (
    <>
      <Navbar />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-xl text-green-800 font-semibold">
              TOP ATTRACTIONS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mt-4">
              Explore Kashmir’s Wonders
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 mt-6 text-lg">
              Discover the most breathtaking valleys, lakes, gardens, and historic landmarks that make Kashmir a paradise on Earth.
            </p>
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map((item) => (
              <div
                key={item.title}
                className="relative group rounded-lg overflow-hidden aspect-square"
              >
                {/* ❤️ Favorite Button */}
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

                {/* Card Link */}
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

          {/* Actions */}
          <div className="text-center mt-16">
            <Link href="/bucket-list">
              <button className="px-8 py-3 bg-rose-600 text-white font-medium rounded-lg hover:bg-rose-700 transition shadow-lg">
                View Bucket List
              </button>
            </Link>

            <RelatedCards />
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
