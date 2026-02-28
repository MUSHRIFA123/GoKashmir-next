import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

/* ---------------------------------------
   Server fetch (important for AdSense)
--------------------------------------- */
async function getPlace(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/places/${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  const data = await res.json();

  // keep your existing filter
  if (data.category_slug !== "attractions") return null;

  return data;
}

/* ---------------------------------------
   Page (SERVER COMPONENT)
--------------------------------------- */
export default async function AttractionPage({ params }) {
  const { slug } = await params; // ✅ Next.js 14 fix

  const place = await getPlace(slug);

  if (!place) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto p-6 space-y-6">
        <h1 className="text-4xl font-bold">{place.title}</h1>
        <p className="text-gray-500">{place.locality}</p>

        {place.image?.url && (
          <img
            src={place.image.url}
            alt={place.image.alt || place.title}
            className="w-full h-80 object-cover rounded"
          />
        )}

        <div className="space-y-4">
          {place.description_seo && (
            <p className="text-gray-600 font-semibold">
              {place.description_seo}
            </p>
          )}

          {place.description && (
            <div className="prose max-w-none prose-headings:text-green-900 prose-a:text-blue-600">
              <ReactMarkdown>{place.description}</ReactMarkdown>
            </div>
          )}

          {(place.address_line_1 || place.address_line_2) && (
            <p>
              <strong>Address:</strong>{" "}
              {place.address_line_1}
              {place.address_line_2 ? `, ${place.address_line_2}` : ""}
            </p>
          )}

          {(place.area || place.category) && (
            <p>
              <strong>Area:</strong> {place.area}{" "}
              {place.category && (
                <>
                  | <strong>Category:</strong> {place.category}
                </>
              )}
            </p>
          )}

          {place.features && (
            <p>
              <strong>Features:</strong> {place.features}
            </p>
          )}

          {place.travel_information && (
            <div>
              <strong>Travel Information:</strong>
              <div className="mt-2 prose max-w-none">
                <ReactMarkdown>{place.travel_information}</ReactMarkdown>
              </div>
            </div>
          )}
        </div>

        {/* ---------------- FAQs (server rendered) ---------------- */}
        {place.faqs && place.faqs.length > 0 && (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-4">FAQs</h2>

            <div className="space-y-4">
              {place.faqs.map((faq, index) => (
                <div key={index} className="border rounded p-4">
                  <h3 className="font-semibold">{faq.question}</h3>
                  <p className="mt-1 text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ---------------- Products Section ---------------- */}
        {place.products && place.products.length > 0 && (
          <div className="mt-10">
            <h2 className="text-3xl font-semibold mb-6">
              Products You Might Like
            </h2>

            <div className="flex gap-6 overflow-x-auto">
              {place.products.map((product, idx) => {
                const isLastFive =
                  idx >= place.products.length - 5;

                return (
                  <a
                    key={idx}
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`border rounded shadow hover:shadow-lg transition duration-200 flex flex-col
                      ${isLastFive ? "flex-[1.5_1_0%]" : "flex-[1_1_0%]"}`}
                  >
                    <img
                      src={product.image?.url || "/placeholder.png"}
                      alt={product.image?.alt || product.name}
                      className="w-full h-48 object-cover rounded-t"
                    />

                    <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                          {product.description}
                        </p>
                      </div>

                      {product.price && (
                        <p className="font-bold text-green-700 mt-2">
                          ₹{product.price}
                        </p>
                      )}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}