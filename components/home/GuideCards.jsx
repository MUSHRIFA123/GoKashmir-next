import React from "react";
import Link from 'next/link'
import Image from 'next/image';

const GuideCards = () => {
  return (
    <section className="lg:px-20 md:px-10 px-5 pb-10">
      <div className="mx-auto flex justify-center px-4 py-16 sm:py-24 lg:max-w-7xl">
        <div className="flex flex-col text-center max-w-6xl mx-auto">

          {/* ---- TOP TITLE + DESCRIPTION ---- */}
          <h2 className="text-3xl font-bold text-emerald-600 py-5">
            Kashmir Travel Guide
          </h2>

          <p className="text-gray-600">
            Explore the paradise on earth — Kashmir. From snow-covered mountains
            and peaceful lakes to adventure sports, romantic escapes, and local
            travel tips, this guide helps you plan the perfect Kashmir trip.
          </p>

          {/* ---- CARDS ---- */}
          <div className="grid gap-5 pt-10 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">

            {/* Things to Do */}
            <Link href="/#" className="group flex justify-center [perspective:1000px]">
              <div className="relative lg:h-[400px] lg:w-64 sm:h-[365px] sm:w-60 h-[450px] w-[300px] rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                <div className="absolute inset-0 rounded-xl [backface-visibility:hidden]">
                  <img
                    className="object-cover h-full w-full rounded-xl"
                    src="/img/Guide/things-to-do-in-kashmir.jpg"
                    alt="Things to do in Kashmir"
                  />
                </div>

                <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-transparent to-black" />
                <div className="absolute inset-0 translate-y-[78%] px-8 text-center">
                  <p className="text-xl font-bold text-white">Things to Do</p>
                </div>

                <div className="absolute inset-0 rounded-xl bg-black/80 px-5 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col justify-center">
                    <h2 className="text-xl font-bold mb-3">Things to Do</h2>
                    <p className="text-base mb-4">
                      Enjoy shikara rides on Dal Lake, ski in Gulmarg, trek through
                      scenic valleys, experience snowfall, and explore Kashmir’s
                      rich culture and gardens.
                    </p>
                    <button className="bg-yellow-800 hover:bg-yellow-700 px-4 py-1 rounded-full">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </Link>

            {/* Where to Stay */}
            <Link href="/#" className="group flex justify-center [perspective:1000px]">
              <div className="relative lg:h-[400px] lg:w-64 sm:h-[365px] sm:w-60 h-[450px] w-[300px] rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                <div className="absolute inset-0 rounded-xl [backface-visibility:hidden]">
                  <img
                    className="object-cover h-full w-full rounded-xl"
                    src="/img/Guide/stay-in-kashmir.jpg"
                    alt="Where to stay in Kashmir"
                  />
                </div>

                <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-transparent to-black" />
                <div className="absolute inset-0 translate-y-[78%] px-8 text-center">
                  <p className="text-xl font-bold text-white">Where to Stay</p>
                </div>

                <div className="absolute inset-0 rounded-xl bg-black/80 px-5 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col justify-center">
                    <h2 className="text-xl font-bold mb-3">Where to Stay</h2>
                    <p className="text-base mb-4">
                      Find the best hotels, cozy houseboats, luxury resorts, and
                      budget stays in Srinagar, Gulmarg, Pahalgam, and Sonmarg.
                    </p>
                    <button className="bg-yellow-800 hover:bg-yellow-700 px-4 py-1 rounded-full">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </Link>

            {/* Travel Information */}
            <Link href="/#" className="group flex justify-center [perspective:1000px]">
              <div className="relative lg:h-[400px] lg:w-64 sm:h-[365px] sm:w-60 h-[450px] w-[300px] rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                <div className="absolute inset-0 rounded-xl [backface-visibility:hidden]">
                  <img
                    className="object-cover h-full w-full rounded-xl"
                    src="/img/Guide/travel-information.jpg"
                    alt="Kashmir travel information"
                  />
                </div>

                <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-transparent to-black" />
                <div className="absolute inset-0 translate-y-[78%] px-8 text-center">
                  <p className="text-xl font-bold text-white">Travel Info</p>
                </div>

                <div className="absolute inset-0 rounded-xl bg-black/80 px-5 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col justify-center">
                    <h2 className="text-xl font-bold mb-3">Travel Information</h2>
                    <p className="text-base mb-4">
                      Learn about the best time to visit, weather, permits,
                      transport options, safety tips, and local travel advice
                      for Kashmir.
                    </p>
                    <button className="bg-yellow-800 hover:bg-yellow-700 px-4 py-1 rounded-full">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </Link>

            {/* Honeymoon */}
            <Link href="/#" className="group flex justify-center [perspective:1000px]">
              <div className="relative lg:h-[400px] lg:w-64 sm:h-[365px] sm:w-60 h-[450px] w-[300px] rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                <div className="absolute inset-0 rounded-xl [backface-visibility:hidden]">
                  <img
                    className="object-cover h-full w-full rounded-xl"
                    src="/img/Guide/kashmir-honeymoon.jpg"
                    alt="Kashmir honeymoon"
                  />
                </div>

                <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-transparent to-black" />
                <div className="absolute inset-0 translate-y-[78%] px-8 text-center">
                  <p className="text-xl font-bold text-white">Honeymoon</p>
                </div>

                <div className="absolute inset-0 rounded-xl bg-black/80 px-5 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col justify-center">
                    <h2 className="text-xl font-bold mb-3">Honeymoon in Kashmir</h2>
                    <p className="text-base mb-4">
                      Plan a dreamy honeymoon with snow views, romantic
                      houseboats, candlelight dinners, and peaceful moments in
                      the valleys of Kashmir.
                    </p>
                    <button className="bg-yellow-800 hover:bg-yellow-700 px-4 py-1 rounded-full">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default GuideCards;
