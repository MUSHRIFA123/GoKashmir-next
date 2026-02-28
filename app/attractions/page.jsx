import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AttractionsClient from "./AttractionsClient";
import ListingHero from "@/components/ListingHero";

async function getAttractions() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/places`,
    { cache: "no-store" }
  );

  if (!res.ok) return [];

  const data = await res.json();

  return data.filter((p) => p.category_slug === "attractions");
}

export default async function AttractionsPage() {
  const places = await getAttractions();

  return (
    <>
      <Navbar />
      <ListingHero
        title="Explore Attractions in Kashmir"
        subtitle="Nature, valleys, lakes & famous sightseeing spots"
        description="Discover the most beautiful attractions across Kashmir, including breathtaking valleys, crystal-clear lakes, colourful Mughal gardens, and timeless historic landmarks. Explore top tourist destinations, peaceful hidden gems, and scenic viewpoints that showcase the true charm of the region. Whether you love nature, culture, photography, or slow travel, this guide helps you plan a memorable and well-balanced Kashmir trip filled with unforgettable experiences."
        image="img/attractions/attractions-hero/lal-chowk.jpg"
      />
      <AttractionsClient places={places} />
      <Footer />
    </>
  );
}