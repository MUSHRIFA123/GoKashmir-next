'use client';

import AboutUs from "../about/AboutUs";
import BestDestination from "./BestDestination";
import GuideCards from "./GuideCards";
import Link from 'next/link'
import Image from 'next/image';

export default function HomeHero() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="hero h-[500px] flex items-center text-center text-white relative overflow-hidden"
        id="home"
      >
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/img/Homehero/video.mp4"
        ></video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

        {/* Hero Content */}
        <div className="hero-content relative z-10 max-w-[800px] mx-auto px-5">
          <h1 className="text-4xl md:text-5xl mb-5">Explore the Beauty of Kashmir</h1>
          <p className="text-lg mb-6">
            Discover breathtaking landscapes, serene lakes, rich culture, and unforgettable travel experiences
          </p>
          <Link
            href="/about-kashmir"
            className="btn bg-green-700 hover:bg-green-800 text-white py-3 px-8 rounded-md text-lg"
          >
            Explore Kashmir
          </Link>
        </div>
      </section>

      {/* Best Destinations Section */}
      <BestDestination />

      {/* MENU / HERO CARDS SECTION */}
      <section className="menu py-10" id="menu">
        <div className="container mx-auto px-6">
          <div className="section-title text-center mb-12">
            <h2 className="text-3xl font-bold text-emerald-600 py-5">Explore Kashmir</h2>
            <p className="text-gray-600">
              Discover the breathtaking beauty, culture, and hidden gems of the Paradise on Earth.
            </p>
          </div>

          <div className="menu-items grid gap-10 md:grid-cols-2 lg:grid-cols-3">

            {/* Card 1 */}
            <Link href="/attractions" className="menu-item bg-white rounded-xl shadow-md overflow-hidden block">
              <img
                src="/img/Herocards/attractions.jpg"
                alt="Top Attractions"
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold">Top Attractions</h3>
                <p className="text-gray-600 mt-2">
                  Discover Kashmir’s most famous places
                </p>
                <div className="text-green-700 font-bold mt-3 inline-flex items-center cursor-pointer hover:underline">
                  Explore &rarr;
                </div>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/restaurants" className="menu-item bg-white rounded-xl shadow-md overflow-hidden block">
              <img
                src="/img/Herocards/restaurants.jpg"
                alt="Restaurants"
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold">Restaurants</h3>
                <p className="text-gray-600 mt-2">
                  Explore the best local and popular restaurants in Kashmir.
                </p>
                <div className="text-green-700 font-bold mt-3 inline-flex items-center cursor-pointer hover:underline">
                  Explore &rarr;
                </div>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/culture-and-heritage" className="menu-item bg-white rounded-xl shadow-md overflow-hidden block">
              <img
                src="/img/Herocards/culture.jpg"
                alt="Culture & Heritage"
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold">Culture & Heritage</h3>
                <p className="text-gray-600 mt-2">
                  Discover Kashmir’s culture and heritage.
                </p>
                <div className="text-green-700 font-bold mt-3 inline-flex items-center cursor-pointer hover:underline">
                  Explore &rarr;
                </div>
              </div>
            </Link>

            {/* Card 4 */}
            <Link href="/shoppings" className="menu-item bg-white rounded-xl shadow-md overflow-hidden block">
              <img
                src="/img/Herocards/shopping.jpg"
                alt="Shopping"
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold">Shopping</h3>
                <p className="text-gray-600 mt-2">
                  Best places to shop in Kashmir.
                </p>
                <div className="text-green-700 font-bold mt-3 inline-flex items-center cursor-pointer hover:underline">
                  Explore &rarr;
                </div>
              </div>
            </Link>

            {/* Card 5 */}
            <Link href="/seasons-and-weather" className="menu-item bg-white rounded-xl shadow-md overflow-hidden block">
              <img
                src="/img/Herocards/season.jpg"
                alt="Seasons & Weather"
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold">Seasons & Weather</h3>
                <p className="text-gray-600 mt-2">
                  Seasons and climate of Kashmir.
                </p>
                <div className="text-green-700 font-bold mt-3 inline-flex items-center cursor-pointer hover:underline">
                  Explore &rarr;
                </div>
              </div>
            </Link>

            {/* Card 6 */}
            <Link href="/trekkings-and-adventures" className="menu-item bg-white rounded-xl shadow-md overflow-hidden block">
              <img
                src="/img/Herocards/adventure.jpg"
                alt="Trekking & Adventures"
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold">Trekking & Adventures</h3>
                <p className="text-gray-600 mt-2">
                  Trekking trails and adventure experiences.
                </p>
                <div className="text-green-700 font-bold mt-3 inline-flex items-center cursor-pointer hover:underline">
                  Explore &rarr;
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>
      <GuideCards className="p-0"/>
      <AboutUs/>
    </>
  );
}
