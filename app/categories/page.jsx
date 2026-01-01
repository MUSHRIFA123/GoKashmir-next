import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import RelatedCards from "@/components/RelatedCards";

export default function SeasonsAnsWheather() {

  return (
    <>
      <Navbar />
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
            <a href="/attractions" className="menu-item bg-white rounded-xl shadow-md overflow-hidden block">
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
            </a>

            {/* Card 2 */}
            <a href="/restaurants" className="menu-item bg-white rounded-xl shadow-md overflow-hidden block">
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
            </a>

            {/* Card 3 */}
            <a href="/culture-and-heritage" className="menu-item bg-white rounded-xl shadow-md overflow-hidden block">
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
            </a>

            {/* Card 4 */}
            <a href="/shoppings" className="menu-item bg-white rounded-xl shadow-md overflow-hidden block">
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
            </a>

            {/* Card 5 */}
            <a href="/seasons-and-weather" className="menu-item bg-white rounded-xl shadow-md overflow-hidden block">
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
            </a>

            {/* Card 6 */}
            <a href="/trekkings-and-adventures" className="menu-item bg-white rounded-xl shadow-md overflow-hidden block">
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
            </a>

          </div>
        </div>
      </section>
      
             <RelatedCards/>
            <Footer />
    </>
  );
}
