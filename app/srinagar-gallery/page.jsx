import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import RelatedCards from "@/components/RelatedCards";

export default function Gallery() {

  return (
    <>
      <Navbar />
      <div className="bg-gray-100">
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold text-center mb-8">
       Top Views of Srinagar, Kashmir
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* Large item */}
      <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
        <img
          src="/img/srinagar-gallery/trees.jpg"
          alt="Nature"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-2xl font-bold text-white">Explore Nature</h3>
            <p className="text-white">
              Discover the beauty of the natural world
            </p>
          </div>
        </div>
      </div>
      {/* Two small items */}
      <div className="relative overflow-hidden rounded-2xl shadow-lg group">
        <img
          src="/img/srinagar-gallery/dal-lake.jpg"
          alt="Food"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h4 className="text-xl font-bold text-white">Dal lake</h4>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-2xl shadow-lg group">
        <img
          src="/img/srinagar-gallery/autumn.jpg"
          alt="Technology"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h4 className="text-xl font-bold text-white">Autumn</h4>
          </div>
        </div>
      </div>
      {/* Three medium items */}
      <div className="relative overflow-hidden rounded-2xl shadow-lg group">
        <img
          src="/img/srinagar-gallery/temple-garden.jpg"
          alt="Travel"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h4 className="text-xl font-bold text-white">Temple Garden</h4>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-2xl shadow-lg group">
        <img
          src="/img/srinagar-gallery/charming-houseboats.jpg"
          alt="Art"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h4 className="text-xl font-bold text-white">
              Charming Houseboats
            </h4>
          </div>
        </div>
      </div>
      {/* bottom cards */}
      <div className="relative overflow-hidden rounded-2xl shadow-lg group">
        <img
          src="/img/srinagar-gallery/spring-trees.jpg"
          alt="Sport"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h4 className="text-xl font-bold text-white">Spring Trees</h4>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-2xl shadow-lg group">
        <img
          src="/img/srinagar-gallery/old-city.jpg"
          alt="Sport"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h4 className="text-xl font-bold text-white">Old City</h4>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-2xl shadow-lg group">
        <img
          src="/img/srinagar-gallery/cityscape.jpg"
          alt="Sport"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h4 className="text-xl font-bold text-white">Cityscape</h4>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-2xl shadow-lg group">
        <img
          src="/img/srinagar-gallery/mosque.jpg"
          alt="Sport"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h4 className="text-xl font-bold text-white">Trees</h4>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-center mt-10">
    <a
      href="/place/attractions/srinagar"
      className="px-8 py-3 text-lg font-semibold text-white bg-green-600 rounded-full
                hover:bg-green-700 transition duration-300 shadow-lg"
    >
      Explore Srinagar
    </a>
</div>
  </div>
</div>
      
      <RelatedCards/>
     <Footer />
    </>
  );
}
