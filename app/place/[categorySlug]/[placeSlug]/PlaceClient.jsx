'use client';

import { useState } from "react";

export default function PlaceClient({ place }) {
  const images = place.images?.length
    ? place.images
    : [
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      ];

  const [mainImage, setMainImage] = useState(images[0]);

  const featuresArray = Array.isArray(place.features)
    ? place.features
    : place.features?.split(",") || [];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Main Image */}
      <img
        src={mainImage}
        className="w-full md:w-2/3 lg:w-1/2 mx-auto rounded-lg shadow-md mb-4"
        style={{ maxHeight: "400px", objectFit: "cover" }}
        alt={place.title}
      />

      {/* Basic Info */}
      <h1 className="text-2xl md:text-3xl font-bold mt-6">{place.title}</h1>
      <p className="text-gray-600">
        <b>Category:</b> {place.category} | <b>Area:</b> {place.area}
      </p>
      <p className="text-gray-600">
        <b>Location:</b> {place.address_line_1}, {place.address_line_2}
      </p>
      <p className="text-gray-600 mb-4">
        <b>SEO Description:</b> {place.description_seo}
      </p>

      {/* Rating */}
      <div className="flex items-center mb-4">
        <span className="text-yellow-500 font-bold mr-2">
          ⭐ {place.average_rating}
        </span>
        <span className="text-gray-600">({place.reviews} reviews)</span>
      </div>

      {/* Description */}
      <p className="text-gray-700 mb-4">{place.description}</p>

      {/* Features */}
      {featuresArray.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
          <ul className="list-disc list-inside text-gray-700">
            {featuresArray.map((f, i) => (
              <li key={i}>{f.trim()}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Travel Information */}
      {place.travel_information && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Travel Information:</h3>
          <p className="text-gray-700">{place.travel_information}</p>
        </div>
      )}

      {/* FAQs */}
      {place.faqs && place.faqs.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">FAQs:</h3>
          {place.faqs.map((faq, idx) => (
            <div key={idx} className="mb-2">
              <p className="font-semibold">Q: {faq.question}</p>
              <p className="text-gray-700">A: {faq.answer}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
