"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedCards from "@/components/RelatedCards";
import ShoppingGuide from "@/data/json/ShoppingGuide";

export default function AttractionsPage() {
  const [favorites, setFavorites] = useState([]);
  const [showTopOnly, setShowTopOnly] = useState(false);
  const [selectedLocations, setSelectedLocations] = useState([]);

  // Load bucket list
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bucketList")) || [];
    setFavorites(saved);
  }, []);

  // Toggle bucket list
  const toggleFavorite = (item) => {
    const updated = favorites.some((f) => f.slug === item.slug)
      ? favorites.filter((f) => f.slug !== item.slug)
      : [...favorites, item];

    setFavorites(updated);
    localStorage.setItem("bucketList", JSON.stringify(updated));
  };

  const isFavorite = (slug) =>
    favorites.some((f) => f.slug === slug);

  // Locations from data
  const locations = [...new Set(ShoppingGuide.map((a) => a.location))];

  const handleLocationChange = (loc) => {
    setSelectedLocations((prev) =>
      prev.includes(loc)
        ? prev.filter((l) => l !== loc)
        : [...prev, loc]
    );
  };

  // Filtering logic
  const filteredAttractions = ShoppingGuide.filter((item) => {
    if (showTopOnly && !item.top) return false;
    if (selectedLocations.length && !selectedLocations.includes(item.location))
      return false;
    return true;
  });

  return (
    <>
      <Navbar />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">

          {/* Header */}
          <div className="text-center mb-14">
            <span className="text-green-700 font-semibold tracking-wide">
              TOP ATTRACTIONS
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 text-green-900">
              Explore Kashmir’s Wonders
            </h1>
            <p className="max-w-2xl mx-auto text-gray-600 mt-6">
              Discover valleys, lakes, gardens, and cultural landmarks across Kashmir.
            </p>
          </div>

          {/* Layout */}
          <div className="flex flex-col lg:grid lg:grid-cols-4 gap-8">

            {/* Sidebar */}
            <aside className="w-full lg:col-span-1 lg:border-r lg:pr-6">
              <div className="bg-white rounded-xl p-4 shadow lg:shadow-none lg:sticky lg:top-24">

                {/* Top Filter */}
                <div className="mb-6">
                  <h3 className="font-semibold text-lg mb-3">
                    Attraction Type
                  </h3>
                  <label className="flex items-center gap-3 text-gray-700">
                    <input
                      type="checkbox"
                      checked={showTopOnly}
                      onChange={() => setShowTopOnly(!showTopOnly)}
                      className="accent-green-700"
                    />
                    Top Attractions
                  </label>
                </div>

                {/* Location Filter */}
                <div>
                  <h3 className="font-semibold text-lg mb-3">
                    Location
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
              </div>
            </aside>

            {/* Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                {filteredAttractions.map((item) => (
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
                      href={`/shoppings/${item.slug}`}
                      className="block w-full h-full"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                        <div>
                          <h3 className="text-white font-bold text-lg">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-200">
                            {item.location}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}

              </div>
            </div>
          </div>

          {/* Bucket List CTA */}
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
