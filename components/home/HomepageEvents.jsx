"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const HomepageEvents = () => {
  const [upcoming, setUpcoming] = useState([]);
  const [latest, setLatest] = useState([]);

  useEffect(() => {
    fetch("/api/events")
      .then((res) => res.json())
      .then((data) => {
        setUpcoming(data.upcoming || []);
        setLatest(data.latest || []);
      });
  }, []);

  const UpcomingCard = ({ event, className = "" }) => {
    if (!event) return null;

    return (
      <Link
        href={`/events/${event.slug}`}
        className={`group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 ${className}`}
      >
        {event.featuredImage?.url && (
          <img
            src={event.featuredImage.url}
            alt={event.featuredImage?.alt || event.title}
            className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 to-gray-900/10" />

        <h3 className=" text-white absolute top-0 left-0 p-4 md:text-xs">
          {event.title}
        </h3>
      </Link>
    );
  };

  return (
    <>
      {/* Upcoming Events – new design */}
      <section className="bg-white relative py-6" id="event">
        <div className="py-0 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-green-600">
              What's coming up in Kashmir
            </h2>
          </div>

          {upcoming.length === 0 && (
            <p className="text-center text-gray-500">No upcoming events</p>
          )}

          {upcoming.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
              {/* Left big card */}
              <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
                <UpcomingCard
                  event={upcoming[0]}
                  className="flex-grow"
                />
              </div>

              {/* Middle block */}
              <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
                {/* top middle large */}
                <UpcomingCard
                  event={upcoming[1]}
                  className="mb-4"
                />

                {/* two small cards */}
                <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                  <UpcomingCard event={upcoming[2]} />
                  <UpcomingCard event={upcoming[3]} />
                </div>
              </div>

              {/* Right tall card */}
              <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
                <UpcomingCard
                  event={upcoming[4]}
                  className="flex-grow"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Latest events */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-4">Latest Events</h2>

        {latest.length === 0 && (
          <p className="text-gray-500">No events found</p>
        )}

        <div className="grid md:grid-cols-3 gap-6">
          {latest.map((event) => (
            <Link
              key={event._id}
              href={`/events/${event.slug}`}
            >
              <div className="border rounded-lg overflow-hidden hover:shadow-md transition cursor-pointer">
                {event.featuredImage?.url && (
                  <img
                    src={event.featuredImage.url}
                    alt={event.featuredImage?.alt || event.title}
                    className="h-40 w-full object-cover"
                  />
                )}

                <div className="p-4">
                  <h3 className="font-semibold">{event.title}</h3>
                  <p className="text-sm text-gray-500">
                    {event.location}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {new Date(event.start_date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomepageEvents;
