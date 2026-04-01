'use client'; // THIS MAKES IT A CLIENT COMPONENT

import { useState } from 'react';

export default function HotelsList({ hotels }) {
  const [filter, setFilter] = useState('All');

  const filters = ['All', 'Big Sale', 'Srinagar', 'Pahalgam', 'Sonamarg', 'Gulmarg'];

  const filteredHotels = filter === 'All'
    ? hotels
    : hotels.filter(hotel =>
        hotel.category?.toLowerCase() === filter.toLowerCase() ||
        hotel.place?.toLowerCase() === filter.toLowerCase()
      );

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full border font-semibold transition 
              ${filter === f ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Hotels Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredHotels.map(hotel => (
          <div key={hotel._id} className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition relative">

            {/* Sale Banner */}
            {hotel.category && (
              <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded z-10">
                {hotel.category}
              </div>
            )}

            {/* Hotel Image */}
            {hotel.image && (
              <div className="relative">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
                  Image source: Klook
                </span>
              </div>
            )}

            {/* Hotel Details */}
            <div className="p-4">
              <h2 className="text-xl font-semibold">{hotel.name}</h2>
              <p className="text-sm text-gray-500">
                {hotel.place} · {hotel.stars} stars
              </p>
              <p className="mt-2 text-yellow-600">Rating: {hotel.rating}</p>
              <p className="mt-2 text-gray-700">
                From {hotel.currency} {hotel.discounted_price}{" "}
                {hotel.price && (
                  <span className="line-through text-gray-400">{hotel.currency} {hotel.price}</span>
                )}
              </p>
              <a 
                href={hotel.affiliate_link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Book Now
              </a>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}