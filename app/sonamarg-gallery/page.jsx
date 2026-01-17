import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import RelatedCards from "@/components/RelatedCards";
import Link from "next/link";

export default function Gallery() {

  return (
    <>
      <Navbar />
      <div className="bg-gray-100">
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold text-center mb-8">
       Top Views of Sonamarg, Kashmir
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* Large item */}
      <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
        <img
          src="/img/sonamarg-gallery/tent-on-mountain.jpg"
          alt="Nature"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-2xl font-bold text-white">Explore Nature</h3>
            <p className="text-white">
              Discover the beauty of Sonamarg
            </p>
          </div>
        </div>
      </div>
      {/* Two small items */}
      <div className="relative overflow-hidden rounded-2xl shadow-lg group">
        <img
          src="/img/sonamarg-gallery/snow-capped-peaks.jpg"
          alt="Food"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h4 className="text-xl font-bold text-white">Snow-Capped Peaks</h4>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-2xl shadow-lg group">
        <img
          src="/img/sonamarg-gallery/winter-panorama.jpg"
          alt="Technology"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h4 className="text-xl font-bold text-white">Winter Panorama</h4>
          </div>
        </div>
      </div>
      {/* Three medium items */}
      <div className="relative overflow-hidden rounded-2xl shadow-lg group">
        <img
          src="/img/sonamarg-gallery/mountains-and-river.jpg"
          alt="Travel"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h4 className="text-xl font-bold text-white">Mountains and River</h4>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-2xl shadow-lg group">
        <img
          src="/img/sonamarg-gallery/landscape.jpg"
          alt="Art"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h4 className="text-xl font-bold text-white">
              Landscape
            </h4>
          </div>
        </div>
      </div>
      {/* bottom cards */}
      <div className="relative overflow-hidden rounded-2xl shadow-lg group">
        <img
          src="/img/sonamarg-gallery/snowy-village.jpg"
          alt="Sport"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h4 className="text-xl font-bold text-white">Snowy village</h4>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-2xl shadow-lg group">
        <img
          src="/img/sonamarg-gallery/winter-landscape.jpg"
          alt="Sport"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h4 className="text-xl font-bold text-white">Winter Landscape</h4>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-2xl shadow-lg group">
        <img
          src="/img/sonamarg-gallery/house.jpg"
          alt="Sport"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h4 className="text-xl font-bold text-white">House</h4>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-2xl shadow-lg group">
        <img
          src="/img/sonamarg-gallery/valley-in-mountains.jpg"
          alt="Sport"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h4 className="text-xl font-bold text-white">Valley in Mountains</h4>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-center mt-10">
      <Link
        href="/attractions/sonamarg"
        className="px-8 py-3 text-lg font-semibold text-white bg-green-600 rounded-full
                  hover:bg-green-700 transition duration-300 shadow-lg"
      >
        Explore Sonamarg
      </Link>
</div>
  </div>
</div>
      
      <RelatedCards/>
     <Footer />
    </>
  );
}
