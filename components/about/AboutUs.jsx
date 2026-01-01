import React, { useState } from "react";

export default function AboutUs() {
  return (
        <>
        {/* About Section */}
<section id="about" className="py-20 bg-coffee-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="md:flex items-center">
      
      {/* Text Content */}
      <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
        <h2 className="text-3xl font-bold text-coffee-800 mb-6">
          About Us
        </h2>

        <p className="text-coffee-700 mb-4">
          Kashmir Travel Guide was created with a simple goal — to help travelers
          explore Kashmir with confidence, clarity, and inspiration. From
          first-time visitors to seasoned explorers, we aim to make every journey
          to Kashmir smooth and memorable.
        </p>

        <p className="text-coffee-700 mb-4">
          Our platform brings together detailed travel information, destination
          guides, seasonal insights, accommodation options, and local experiences,
          all carefully curated to give you an authentic understanding of
          Kashmir’s beauty and culture.
        </p>

        <p className="text-coffee-700">
          We believe travel is more than sightseeing — it’s about stories,
          connections, and unforgettable moments. Through this guide, we strive
          to help you plan responsibly, travel safely, and experience the true
          essence of Kashmir.
        </p>
      </div>

      {/* Images */}
      <div className="md:w-1/2">
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/img/attractions/dal-lake.jpg"
            alt="Dal Lake Srinagar"
            className="rounded-lg shadow-lg h-64 w-full object-cover"
          />
          <img
            src="/img/attractions/gulmarg.jpg"
            alt="Gulmarg snow landscape"
            className="rounded-lg shadow-lg h-64 w-full object-cover"
          />
          <img
            src="/img/attractions/pahalgam.jpg"
            alt="Pahalgam valley"
            className="rounded-lg shadow-lg h-64 w-full object-cover"
          />
          <img
            src="/img/attractions/sonamarg.jpg"
            alt="Shikara ride in Kashmir"
            className="rounded-lg shadow-lg h-64 w-full object-cover"
          />
        </div>
      </div>

    </div>
  </div>
</section>

        </>
  );
}
