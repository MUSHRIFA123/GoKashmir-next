"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaTrash } from "react-icons/fa";

export default function BucketList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bucketList")) || [];
    setItems(saved);
  }, []);

  const removeItem = (title) => {
    const updated = items.filter((item) => item.title !== title);
    setItems(updated);
    localStorage.setItem("bucketList", JSON.stringify(updated));
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Your bucket list is empty ❤️
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-10">My Bucket List</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="relative rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            {/* 🗑 Delete */}
            <button
              onClick={() => removeItem(item.title)}
              className="absolute top-3 right-3 z-10 bg-black/50 p-2 rounded-full hover:bg-black/70"
            >
              <FaTrash className="text-white text-sm" />
            </button>

            {/* ✅ Only use Link if href exists */}
            {item.href ? (
              <Link href={item.href} className="block">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4 font-semibold">{item.title}</div>
              </Link>
            ) : (
              <div className="block">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4 font-semibold">{item.title}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
