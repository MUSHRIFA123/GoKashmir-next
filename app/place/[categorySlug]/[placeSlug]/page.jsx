import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedCards from "@/components/RelatedCards";
import { unstable_noStore } from 'next/cache';
import { notFound } from 'next/navigation';

async function getPlace(categorySlug, placeSlug) {
  unstable_noStore();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/place/${categorySlug}/${placeSlug}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;
  return res.json();
}

export default async function PlacePage({ params }) {
  // Await params first to resolve the Promise (Next.js 15 requirement)
  const resolvedParams = await params;
  
  // Safe param validation using resolved params
  if (!resolvedParams?.categorySlug || !resolvedParams?.placeSlug) {
    notFound();
  }

  const { categorySlug, placeSlug } = resolvedParams;
  const place = await getPlace(categorySlug, placeSlug);

  if (!place) {
    notFound();
  }

  return (
    <>
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">{place.name || place.title}</h1>
          
          {place.description && (
            <div className="prose max-w-none mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                {place.description}
              </p>
            </div>
          )}
          
          {place.images && place.images.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {place.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={place.name}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              ))}
            </div>
          )}
          
          {place.location && (
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p>{place.location}</p>
            </div>
          )}
        </div>
      </main>
      
      <RelatedCards categorySlug={categorySlug} placeSlug={placeSlug} place={place} />
      
      <Footer />
    </>
  );
}
