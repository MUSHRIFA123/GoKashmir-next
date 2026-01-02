import Link from 'next/link'
import Image from 'next/image';

export default function BestDestination() {
  const destinations = [
    {
      name: "Gulmarg",
      image: "/img/attractions/gulmarg.jpg",
      link: "/gulmarg-gallery"
    },
    {
      name: "Pahalgam",
      image: "/img/attractions/pahalgam.jpg",
      link: "/pahalgam-gallery"
    },
    {
      name: "Sonamarg",
      image: "/img/attractions/sonamarg.jpg",
      link: "/sonamarg-gallery"
    },
    {
      name: "Srinagar",
      image: "/img/attractions/srinagar.jpg",
      link: "/srinagar-gallery"
    },
  ];

  return (
    <>
      <section className="bg-white-50 overflow-hidden">
        <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-14">

          {/* ⭐ Title */}
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800">
              Best Destinations of Kashmir
            </h2>
            <p className="text-zinc-600 mt-3">
              Explore the most breathtaking spots in Kashmir — from lush meadows to tranquil lakes.
            </p>
          </div>

          {/* ⭐ Cards Section */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {destinations.map((dest, idx) => (
              <Link key={idx} href={dest.link} className="relative group">
                <img
                  src={dest.image}
                  className={`rounded-xl ${
                    idx % 2 === 0 ? "rotate-6" : "-rotate-12"
                  } hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom`}
                  alt={dest.name}
                />
                {/* Name overlay animates with image */}
                <span
                  className={`absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-sm font-medium bg-black bg-opacity-50 px-2 py-1 rounded ${
                    idx % 2 === 0 ? "rotate-6" : "-rotate-12"
                  } group-hover:rotate-0 group-hover:-translate-y-12 group-hover:scale-150 transform duration-500 origin-bottom`}
                >
                  {dest.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
