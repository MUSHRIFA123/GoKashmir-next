import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedCards from "@/components/RelatedCards";
import Image from 'next/image';

async function getPlace(categorySlug, placeSlug) {
  const res = await fetch(
    `http://localhost:3000/api/place/${categorySlug}/${placeSlug}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;
  return res.json();
}

export default async function PlacePage({ params }) {
  const { categorySlug, placeSlug } = params;
  const place = await getPlace(categorySlug, placeSlug);

  if (!place) {
    return (
      <>
        <Navbar />
        <h1 className="text-center text-2xl mt-10">Place not found</h1>
        <Footer />
      </>
    );
  }

  const featuresArray = Array.isArray(place.features)
    ? place.features
    : place.features?.split(",") || [];

  const images = place.images || [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    "https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  ];

  return (
    <>
      <Navbar />

      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap -mx-4">
            {/* Images */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <img
                id="mainImage"
                src={images[0]}
                alt={place.title}
                className="w-full h-auto rounded-lg shadow-md mb-4"
              />
              <div className="flex gap-4 py-4 justify-center overflow-x-auto">
                {images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${place.title} ${idx + 1}`}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                    onClick={(e) =>
                      (document.getElementById("mainImage").src = e.target.src)
                    }
                  />
                ))}
              </div>
            </div>

            {/* Place Details */}
            <div className="w-full md:w-1/2 px-4">
              <h2 className="text-3xl font-bold mb-2">{place.title}</h2>
              <p className="text-gray-600 mb-4">
                <b>Category:</b> {place.category} | <b>Area:</b> {place.area}
              </p>
              <p className="text-gray-600 mb-4">
                <b>Location:</b> {place.address_line_1}, {place.address_line_2}
              </p>
              <p className="text-gray-700 mb-4">{place.description}</p>
              <p className="text-gray-600 mb-4">
                <b>SEO Description:</b> {place.description_seo}
              </p>

              <div className="flex items-center mb-4">
                <span className="text-yellow-500 font-bold mr-2">
                  ⭐ {place.average_rating}
                </span>
                <span className="text-gray-600">({place.reviews} reviews)</span>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
                <ul className="list-disc list-inside text-gray-700">
                  {featuresArray.map((feature, idx) => (
                    <li key={idx}>{feature.trim()}</li>
                  ))}
                </ul>
              </div>

              {/* Travel Information */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">
                  Travel Information:
                </h3>
                <p className="text-gray-700">{place.travel_information}</p>
              </div>

              {/* FAQs */}
              {place.faqs && place.faqs.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">FAQs:</h3>
                  {place.faqs.map((faq, idx) => (
                    <div key={idx} className="mb-2">
                      <p className="font-semibold">Q: {faq.question}</p>
                      <p className="text-gray-700">A: {faq.answer}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <RelatedCards/>
      <Footer />
    </>
  );
}
