import React from "react";
import Link from "next/link";

const HomepageEvents = () => {
  return (
    <>
      <section className="bg-white relative py-6" id="event">
        <div className="py-0 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          {/* Title at the top middle */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-green-600">
              What's coming up in Kashmir
            </h2>
          </div>
          <div><p></p></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
              <Link
                href="/events/srinagar-winter-carnival-2025"
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src="\img\Events\srinagar-winter-carnival.jpg"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                <h3 className="z-10 text-xl font-small text-white absolute top-0 left-0 p-4 xs:text-xl md:text-xl">
                  Srinagar Winter Carnival
                </h3>
              </Link>
            </div>

            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
              <Link
                href="/events/galdan-namchot-festival-ladakh"
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
              >
                <img
                  src="\img\Events\galdan-namchot-festival.jpg"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                <h3 className="z-10 text-xl font-small text-white absolute top-0 left-0 p-4 xs:text-xl md:text-xl">
                  Galdan Namchot Festival
                </h3>
              </Link>
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                <Link
                  href="/events/pahalgam-winter-festival-2025"
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src="\img\Events\pahalgam-winter-festival.jpg"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                  <h3 className="z-10 text-xl font-small text-white absolute top-0 left-0 p-4 xs:text-xl md:text-xl">
                    Pahalgam Winter Festival
                  </h3>
                </Link>
                <Link
                  href="/events/kashmir-christmas-celebrations-2025"
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src="\img\Events\kashmir-christmas-celebrations.jpg"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                  <h3 className="z-10 text-xl font-small text-white absolute top-0 left-0 p-4 xs:text-xl md:text-xl">
                    Kashmir Christmas Celebrations
                  </h3>
                </Link>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
              <Link
                href="/events/ladakhi-losar-new-year-2025"
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src="\img\Events\ladakhi-losar.jpg"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
                <h3 className="z-10 text-xl font-small text-white absolute top-0 left-0 p-4 xs:text-xl md:text-xl">
                  Ladakhi Losar (Tibetan New Year)
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomepageEvents;
