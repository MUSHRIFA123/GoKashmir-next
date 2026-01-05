"use client";

import Link from "next/link";
import Image from "next/image";

export default function PlaceCard({ place }) {
  return (
    <Link href={`/place/${place.category_slug}/${place.slug}`}>
      <div className="bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer overflow-hidden">
        
        {/* Image */}
        <div className="relative h-48 w-full">
          <Image
            src={
              place.images?.[0] ||
              "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800"
            }
            alt={place.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-lg font-semibold">{place.title}</h3>

          <p className="text-sm text-gray-600">
            {place.area}, {place.locality}
          </p>

          <div className="flex justify-between items-center mt-2">
            <span className="text-yellow-500 font-medium">
              ⭐ {place.average_rating}
            </span>
            <span className="text-xs text-gray-500">
              {place.reviews} reviews
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
