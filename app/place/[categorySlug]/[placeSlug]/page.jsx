import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlaceClient from "./PlaceClient";
import RelatedCards from "@/components/RelatedCards";

async function getPlace(categorySlug, placeSlug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/place/${categorySlug}/${placeSlug}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;
  return res.json();
}

export default async function PlacePage({ params }) {
  const { categorySlug, placeSlug } = params;
  const place = await getPlace(categorySlug, placeSlug);

  if (!place) {
    return <h1>Place not found</h1>;
  }

  return (
    <>
      <Navbar />
      <PlaceClient place={place} />
      <RelatedCards/>
      <Footer />
    </>
  );
}
