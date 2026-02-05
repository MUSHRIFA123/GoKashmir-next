"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function AttractionsPage() {
  const [places, setPlaces] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [showTopOnly, setShowTopOnly] = useState(false);
  const [selectedLocations, setSelectedLocations] = useState([]);

  // Fetch data from API and filter only Attractions category
  useEffect(() => {
    fetch("/api/places")
      .then((res) => res.json())
      .then((data) => {
        const attractions = data.filter(
          (p) => p.category_slug === "attractions"
        );
        setPlaces(attractions);
      });
  }, []);

  // Load bucket list
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bucketList")) || [];
    setFavorites(saved);
  }, []);

  const toggleFavorite = (item) => {
    const updated = favorites.some((f) => f.slug === item.slug)
      ? favorites.filter((f) => f.slug !== item.slug)
      : [...favorites, item];

    setFavorites(updated);
    localStorage.setItem("bucketList", JSON.stringify(updated));
  };

  const isFavorite = (slug) => favorites.some((f) => f.slug === slug);

  const locations = [...new Set(places.map((p) => p.locality))];

  const filtered = places.filter((p) => {
    if (showTopOnly && !p.top) return false;
    if (
      selectedLocations.length &&
      !selectedLocations.includes(p.locality)
    )
      return false;
    return true;
  });

  const handleLocationChange = (loc) => {
    setSelectedLocations((prev) =>
      prev.includes(loc)
        ? prev.filter((l) => l !== loc)
        : [...prev, loc]
    );
  };

  return (
    <>
      <Navbar />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">
            Explore Attractions
          </h1>

          <div className="flex flex-col lg:grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="w-full lg:col-span-1 lg:border-r lg:pr-6">
              <div className="bg-white rounded-xl p-4 shadow lg:shadow-none lg:sticky lg:top-24">
                <h3 className="font-semibold text-lg mb-3">
                  Top Attractions
                </h3>

                <label className="flex items-center gap-3 text-gray-700">
                  <input
                    type="checkbox"
                    checked={showTopOnly}
                    onChange={() => setShowTopOnly(!showTopOnly)}
                    className="accent-green-700"
                  />
                  Show Top
                </label>

                <h3 className="font-semibold text-lg mt-6 mb-3">
                  Locations
                </h3>

                <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
                  {locations.map((loc) => (
                    <label
                      key={loc}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <input
                        type="checkbox"
                        checked={selectedLocations.includes(loc)}
                        onChange={() => handleLocationChange(loc)}
                        className="accent-green-700"
                      />
                      {loc}
                    </label>
                  ))}
                </div>
              </div>
            </aside>

            {/* Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filtered.map((item) => (
                  <div
                    key={item.slug}
                    className="relative group rounded-xl overflow-hidden aspect-square"
                  >
                    {/* Favorite */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleFavorite(item);
                      }}
                      className="absolute top-2 right-2 z-10 p-2 rounded-full bg-black/40 hover:bg-black/60"
                    >
                      <FaHeart
                        className={`text-lg ${
                          isFavorite(item.slug)
                            ? "text-red-500"
                            : "text-gray-300"
                        }`}
                      />
                    </button>

                    {/* Card */}
                    <Link
                      href={`/attractions/${item.slug}`}
                      className="block w-full h-full"
                    >
                      <img
                        src={item.image?.url}
                        alt={item.image?.alt || item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                        <div>
                          <h3 className="text-white font-bold text-lg">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-200">
                            {item.locality}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
