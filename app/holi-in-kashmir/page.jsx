import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export const metadata = {
  title: "Holi in Kashmir – Festival, Travel Guide & Tips | GoKashmir",
  description:
    "Celebrate Holi in Kashmir with culture, travel tips, best places, weather, safety guidance and a complete travel guide by GoKashmir."
};

export default function HoliInKashmir() {
  return (
    <>
    <Navbar/>
    <main className="bg-white">

      <section className="relative h-[420px] flex items-center justify-center text-center">
        <img
          src="img/Homehero/occasions/holi-kashmir-hero.jpg"
          alt="Holi celebration in Kashmir"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Holi in Kashmir
          </h1>
          <p className="text-white text-lg md:text-xl">
            Experience colours, culture and springtime beauty in the peaceful
            valleys of Kashmir with GoKashmir.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-3xl font-bold text-emerald-600 mb-4">
              Celebrate Holi in a Unique Way
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Holi in Kashmir offers a calm and meaningful way to enjoy the
              festival of colours. While large public celebrations are limited,
              travellers can experience the spirit of Holi through warm local
              hospitality, traditional food, cultural interactions and the
              stunning natural surroundings of the valley.
            </p>
            <p className="text-gray-700 leading-relaxed">
              During early spring, Kashmir slowly awakens after winter. Snow
              begins to melt, gardens show fresh blooms and the air becomes
              perfect for relaxed sightseeing, photography and slow travel.
              Holi here is about togetherness, peaceful moments and discovering
              the real charm of the region.
            </p>
          </div>

          <div>
            <img
              src="img/Homehero/occasions/holi-kashmir-view.jpg"
              alt="Spring season in Kashmir during Holi"
              className="rounded-2xl shadow-lg w-full h-[320px] object-cover"
            />
          </div>

        </div>
      </section>

      <section className="bg-gray-50 py-14">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center text-emerald-600 mb-10">
            What You Can Experience During Holi in Kashmir
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-xl mb-3">Local Culture</h3>
              <p className="text-gray-600">
                Interact with locals, understand regional traditions and enjoy
                simple festive moments with families and small communities.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-xl mb-3">Spring Landscapes</h3>
              <p className="text-gray-600">
                Witness gardens, lakes and hills slowly turning green after
                winter, creating beautiful scenery for photography and walks.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-xl mb-3">Authentic Cuisine</h3>
              <p className="text-gray-600">
                Taste traditional Kashmiri dishes, fresh bread, kahwa tea and
                seasonal flavours prepared in local homes and restaurants.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-emerald-600 mb-8 text-center">
            Best Places to Visit During Holi
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

        <Link
            href="/attractions/dal-lake"
            className="rounded-xl overflow-hidden shadow block hover:shadow-lg transition"
        >
            <img
            src="/img/attractions/dal-lake.jpg"
            className="h-48 w-full object-cover"
            alt="Dal Lake during spring"
            />
            <div className="p-4">
            <h4 className="font-semibold text-lg">Dal Lake & Boulevard</h4>
            <p className="text-gray-600 text-sm mt-2">
                Enjoy peaceful shikara rides and lakeside walks in spring air.
            </p>
            </div>
        </Link>

        <Link
            href="/attractions/mughal-gardens"
            className="rounded-xl overflow-hidden shadow block hover:shadow-lg transition"
        >
            <img
            src="/img/attractions/mughal-gardens.jpg"
            className="h-48 w-full object-cover"
            alt="Mughal Gardens in spring"
            />
            <div className="p-4">
            <h4 className="font-semibold text-lg">Mughal Gardens</h4>
            <p className="text-gray-600 text-sm mt-2">
                One of the best places to enjoy early blooms and scenic views.
            </p>
            </div>
        </Link>

        <Link
            href="/attractions/gulmarg"
            className="rounded-xl overflow-hidden shadow block hover:shadow-lg transition"
        >
            <img
            src="/img/attractions/gulmarg.jpg"
            className="h-48 w-full object-cover"
            alt="Gulmarg in March"
            />
            <div className="p-4">
            <h4 className="font-semibold text-lg">Gulmarg</h4>
            <p className="text-gray-600 text-sm mt-2">
                A perfect mix of snow patches and fresh spring scenery.
            </p>
            </div>
        </Link>

        </div>

        </div>
      </section>

      <section className="bg-emerald-50 py-14">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-emerald-700 mb-8 text-center">
            Travel Information for Holi in Kashmir
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">How to Reach</h3>
              <ul className="text-gray-700 space-y-2 list-disc list-inside">
                <li>Nearest airport is Srinagar International Airport.</li>
                <li>Direct flights are available from major Indian cities.</li>
                <li>Local taxis and hotel transfers are easily available.</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">Weather During Holi</h3>
              <p className="text-gray-700">
                March weather is cool and pleasant. Daytime temperatures are
                comfortable, while evenings can still be chilly. Light jackets
                are recommended.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">Where to Stay</h3>
              <p className="text-gray-700">
                Houseboats, boutique hotels and family-run guesthouses offer a
                peaceful and warm stay experience during this season.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">Local Transport</h3>
              <p className="text-gray-700">
                Taxis and local drivers are the best option for sightseeing.
                Shared transport is limited for tourist routes.
              </p>
            </div>

          </div>

        </div>
      </section>

      <section className="py-14">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-emerald-600 mb-8 text-center">
            Important Tips for Holi Visitors
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="border-l-4 border-emerald-600 bg-gray-50 p-5 rounded">
              Respect local customs and avoid loud public celebrations.
            </div>

            <div className="border-l-4 border-emerald-600 bg-gray-50 p-5 rounded">
              Always carry valid identification while travelling.
            </div>

            <div className="border-l-4 border-emerald-600 bg-gray-50 p-5 rounded">
              Wear comfortable layered clothing for changing temperatures.
            </div>

            <div className="border-l-4 border-emerald-600 bg-gray-50 p-5 rounded">
              Confirm sightseeing routes and timings with your hotel or guide.
            </div>

            <div className="border-l-4 border-emerald-600 bg-gray-50 p-5 rounded">
              Avoid remote areas without a local guide during early spring.
            </div>

            <div className="border-l-4 border-emerald-600 bg-gray-50 p-5 rounded">
              Keep cash for small local shops and transport.
            </div>

          </div>

        </div>
      </section>

      <section className="bg-emerald-700 py-14 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Plan Your Holi Trip to Kashmir with GoKashmir
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Discover peaceful celebrations, beautiful landscapes and authentic
          cultural experiences during Holi in Kashmir with our curated travel
          guidance.
        </p>

        <a
          href="https://go-kashmir-next.vercel.app/"
          className="inline-block bg-white text-emerald-700 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition"
        >
          Start Planning with GoKashmir
        </a>
      </section>

    </main>
    <Footer/>
    </>
  );
}