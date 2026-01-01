"use client"
import Footer from "@/components/Footer";
import Sponsers from "@/components/home/sponsers";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AboutKashmir() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setInView(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <section className="py-20 bg-green-50 dark:bg-green-900 min-h-screen flex flex-col items-center justify-center">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-6xl">
          <div className="mb-16 text-center">
            <div
              className={`transition-all duration-1000 ease-out ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="mb-4 text-4xl font-bold text-green-700 sm:text-5xl dark:text-green-200">
                Discover Kashmir
              </h2>
              <p className="mx-auto text-xl text-green-800 dark:text-green-300 mb-6">
                Known as the "Paradise on Earth", Kashmir offers breathtaking landscapes, serene lakes, and rich cultural heritage.
              </p>

              {/* Buttons Section */}
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <Link href="/" className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full font-semibold transition transform hover:scale-105">
                  Home
                </Link>
                <Link href="/categories" className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full font-semibold transition transform hover:scale-105">
                  Explore Categories
                </Link>
                <Link href="/restaurants" className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full font-semibold transition transform hover:scale-105">
                  Explore Restaurants
                </Link>
                <Link href="/seasons-and-weather" className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full font-semibold transition transform hover:scale-105">
                  Seasons in Kashmir
                </Link>
              </div>
            </div>
          </div>

          <div className="items-center grid gap-16 mb-20 lg:grid-cols-2">
            <div className="space-y-8">
              <div
                className={`transition-all duration-1000 ease-out delay-200 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h3 className="mb-6 text-3xl font-bold text-green-700 dark:text-green-200">
                  Paradise on Earth
                </h3>
                <p className="mb-6 text-lg text-green-800 leading-relaxed dark:text-green-300">
                  Kashmir, nestled in the Himalayas, is famous for its snow-capped mountains, lush valleys, and picturesque lakes. Popular destinations include Srinagar, Gulmarg, Pahalgam, and Sonamarg.
                </p>
                <p className="text-lg text-green-800 leading-relaxed dark:text-green-300">
                  Whether you want a peaceful stay on the houseboats of Dal Lake, skiing in Gulmarg, or trekking through beautiful valleys, Kashmir has something for every traveler.
                </p>
              </div>

              <div
                className={`transition-all duration-1000 ease-out delay-200 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="space-y-4">
                  {[
                    {
                      title: "Stunning Landscapes",
                      description: "Valleys, mountains, and lakes that take your breath away",
                    },
                    {
                      title: "Cultural Heritage",
                      description: "Experience the rich traditions, crafts, and cuisine of Kashmir",
                    },
                    {
                      title: "Adventure & Leisure",
                      description: "Trekking, skiing, and peaceful houseboat stays for every traveler",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="items-start space-x-4 rtl:space-x-reverse flex">
                      <div className="flex-shrink-0 items-center justify-center flex w-8 h-8 rounded-full bg-green-700">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-green-700 dark:text-green-200">
                          {item.title}
                        </h4>
                        <p className="text-green-800 dark:text-green-300">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div
                className={`transition-all duration-1000 ease-out delay-300 ${
                  inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Kashmir Landscape"
                    className="object-cover w-full h-[384px]"
                  />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="backdrop-blur-sm p-6 rounded-xl bg-white shadow-lg dark:bg-green-800">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-green-700 dark:text-green-200">4+</div>
                          <div className="text-sm text-green-800 dark:text-green-300">Regions</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-green-700 dark:text-green-200">10k+</div>
                          <div className="text-sm text-green-800 dark:text-green-300">Visitors / Year</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-green-700 dark:text-green-200">25+</div>
                          <div className="text-sm text-green-800 dark:text-green-300">Attractions</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Sponsers theme="green"/>
      <Footer />
    </>
  );
}
