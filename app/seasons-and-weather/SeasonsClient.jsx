"use client";

import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function SeasonsClient({ guides }) {
  const [favorites, setFavorites] = useState([]);

  // Load bucket list
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
    <section className="p-4 min-h-screen bg-slate-900">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {guides.map((guide, index) => (
          <div
            key={index}
            className="group relative block bg-black rounded-lg overflow-hidden"
          >
            {/* ❤️ Favorite Icon */}
            <button
              onClick={(e) => {
                e.preventDefault();
                toggleFavorite({
                  title: guide.title,
                  img: guide.image,
                  href: `/seasons-and-weather/${guide.slug}`,
                });
              }}
              className={`absolute top-4 right-4 z-10 p-2 rounded-full transition
                ${
                  isFavorite(guide.title)
                    ? "bg-white/90"
                    : "bg-black/40 hover:bg-black/60"
                }
              `}
            >
              <FaHeart
                className={`text-lg transition-transform duration-200
                  ${
                    isFavorite(guide.title)
                      ? "text-red-500 scale-110"
                      : "text-gray-300"
                  }
                `}
              />
            </button>

            <Link
              href={`/seasons-and-weather/${guide.slug}`}
              className="block h-full"
            >
              <img
                alt={guide.title}
                src={guide.image}
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-sm font-medium tracking-widest uppercase text-rose-400">
                  Season
                </p>

                <p className="text-xl font-bold text-white sm:text-2xl">
                  {guide.title.replace(" in Kashmir", "")}
                </p>

                <div className="mt-32 sm:mt-48 lg:mt-64">
                  <div className="translate-y-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm text-white">
                      {guide.excerpt}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}