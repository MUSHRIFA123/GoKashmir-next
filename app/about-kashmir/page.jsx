"use client";
import Footer from "@/components/Footer";
import Sponsers from "@/components/home/sponsers";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function AboutKashmir() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setInView(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const seasons = [
    {
      season: "Spring",
      period: "Mid-Mar – Mid-May",
      temp: "20-30°C",
      desc: "Blossoming almond trees, mild weather ideal for sightseeing.",
      img: "/img/seasons/spring-season.jpg",
    },
    {
      season: "Summer",
      period: "Mid-May – Mid-Sep",
      temp: "16-30°C",
      desc: "Pleasant, peak season for houseboats and valleys.",
      img: "/img/seasons/summer-season.jpg",
    },
    {
      season: "Autumn",
      period: "Mid-Sep – Mid-Nov",
      temp: "9-20°C",
      desc: "Golden chinar leaves, clear skies for trekking.",
      img: "/img/seasons/autumn-season.jpg",
    },
    {
      season: "Winter",
      period: "Mid-Nov – Mid-Mar",
      temp: "2-11°C",
      desc: "Snowy wonderland, skiing in Gulmarg.",
      img: "/img/seasons/winter-season.jpg",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="py-20 bg-green-50 dark:bg-green-900 min-h-screen flex flex-col items-center justify-center">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-6xl">
          {/* Hero Section */}
          <div className="mb-16 text-center">
            <div
              className={`transition-all duration-1000 ease-out ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h1 className="mb-4 text-4xl font-bold text-green-700 sm:text-5xl dark:text-green-200">
                Discover Kashmir
              </h1>
              <p className="mx-auto text-xl text-green-800 dark:text-green-300 mb-6 max-w-2xl">
                Known as the "Paradise on Earth", Kashmir offers breathtaking landscapes, serene lakes, and rich cultural heritage. From the snow-capped mountains to lush valleys, every corner is a photographer's dream.
              </p>

              {/* Navigation Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <Link
                  href="/"
                  className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full font-semibold transition transform hover:scale-105"
                >
                  Home
                </Link>
                <Link
                  href="/categories"
                  className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full font-semibold transition transform hover:scale-105"
                >
                  Explore Categories
                </Link>
                <Link
                  href="/restaurants"
                  className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full font-semibold transition transform hover:scale-105"
                >
                  Explore Restaurants
                </Link>
                <Link
                  href="/seasons-and-weather"
                  className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full font-semibold transition transform hover:scale-105"
                >
                  Seasons in Kashmir
                </Link>
              </div>
            </div>
          </div>

          <div className="grid gap-16 mb-20 lg:grid-cols-2 items-center">
            <div className="space-y-8">
              <div
                className={`transition-all duration-1000 ease-out delay-200 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="mb-6 text-3xl font-bold text-green-700 dark:text-green-200">
                  Real History Overview
                </h2>
                <p className="mb-6 text-lg text-green-800 leading-relaxed dark:text-green-300">
                  Kashmir has been a cradle of civilization for thousands of years. It was a crossroads for traders along the ancient Silk Road and a hub for spiritual learning. Buddhism and Hinduism flourished here, and later Islamic saints like Shah-i-Hamadan influenced the culture. The region was ruled by Mughals, Sikhs, and Dogras before becoming a princely state under Gulab Singh in 1846.
                </p>
                <p className="text-lg text-green-800 leading-relaxed dark:text-green-300">
                  Post-1947, Kashmir became a region of strategic significance, administered by India, Pakistan, and China. Despite geopolitical tensions, its legacy of scholarship, arts, and spiritual teachings remains influential.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/img/culture-and-heritage/mughal-gardens-shalimar-nishat.jpg"
                alt="Kashmir Himalayan Landscape"
                width={600}
                height={400}
                className="object-cover w-full h-[400px] rounded-3xl shadow-2xl"
              />
            </div>
          </div>

          <div className="grid gap-16 mb-20 lg:grid-cols-2 items-center">
            <div className="relative">
              <Image
                src="/img/about/importance.jpg"
                alt="Dal Lake Houseboats Srinagar"
                width={600}
                height={400}
                className="object-cover w-full h-[400px] rounded-3xl shadow-2xl"
              />
            </div>
            <div className="space-y-8 lg:pt-10">
              <h2 className="mb-6 text-3xl font-bold text-green-700 dark:text-green-200">
                Tourism Importance
              </h2>
              <p className="mb-6 text-lg text-green-800 leading-relaxed dark:text-green-300">
                Tourism is the backbone of Kashmir's economy. Every year, millions of visitors come to experience houseboats on Dal Lake, skiing in Gulmarg, trekking in Pahalgam, and the vibrant culture of Srinagar. Tourism provides jobs, sustains local businesses, and encourages the preservation of heritage sites.
              </p>
              <p className="text-lg text-green-800 leading-relaxed dark:text-green-300">
                Beyond leisure, eco-tourism and adventure sports are increasingly popular, blending scenic beauty with responsible travel practices.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="mb-12 text-3xl font-bold text-center text-green-700 dark:text-green-200">
              Seasons in Kashmir
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {seasons.map((s, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-green-800 p-6 hover:shadow-2xl transition-all"
                >
                  <Image
                    src={s.img}
                    alt={`${s.season} in Kashmir`}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300 mb-4"
                  />
                  <h3 className="text-xl font-bold text-green-700 dark:text-green-200 mb-2">{s.season}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">{s.period}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{s.temp}</p>
                  <p className="text-green-800 dark:text-green-300">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-16 mb-20 lg:grid-cols-2 items-center">
            <div className="space-y-8">
              <h2 className="mb-6 text-3xl font-bold text-green-700 dark:text-green-200">
                Safety for Tourists
              </h2>
              <p className="mb-6 text-lg text-green-800 leading-relaxed dark:text-green-300">
                Kashmir is generally safe, but travelers should remain cautious. Stick to popular tourist routes, travel in groups when possible, and follow local advisories. Hiring local guides for adventure activities ensures safety and richer experiences.
              </p>
              <p className="text-lg text-green-800 leading-relaxed dark:text-green-300">
                Carry valid identification, stay informed of weather conditions, and respect local customs for a secure and enjoyable visit.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/img/about/safety.jpg"
                alt="Safe Tourist Spot in Kashmir"
                width={600}
                height={400}
                className="object-cover w-full h-[400px] rounded-3xl shadow-2xl"
              />
            </div>
          </div>

          {/* Cultural Importance */}
          <div className="mb-20">
            <h2 className="mb-6 text-3xl font-bold text-green-700 dark:text-green-200 text-center">
              Cultural Importance
            </h2>
            <p className="text-lg text-green-800 leading-relaxed dark:text-green-300 mb-4">
              Kashmir's culture is a rich tapestry of music, dance, literature, and handicrafts. Traditional Kashmiri carpets, Pashmina shawls, papier-mâché art, and wood carvings reflect centuries of artisanal mastery. Festivals like Eid, Navratri, and the local harvest celebration 'Herath' showcase the harmonious coexistence of diverse communities.
            </p>
            <p className="text-lg text-green-800 leading-relaxed dark:text-green-300">
              Cuisine also defines its culture. Delicacies like Rogan Josh, Dum Aloo, and Wazwan meals provide a taste of local history and tradition. Music, Sufi poetry, and handicrafts continue to preserve the cultural identity that attracts travelers from across the world.
            </p>
          </div>
        </div>
      </section>

      {/* Sponsors and Footer */}
      <Sponsers theme="green" />
      <Footer />
    </>
  );
}