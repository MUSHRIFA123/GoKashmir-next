import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShoppingsClient from "./ShoppingsClient";
import ListingHero from "@/components/ListingHero";


async function getShoppings() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/places`,
    { cache: "no-store" }
  );

  const data = await res.json();

  return data.filter(p => p.category_slug === "shoppings");
}

export default async function ShoppingsPage() {
  const places = await getShoppings();

  return (
    <>
      <Navbar />
      <ListingHero
        title="Shopping Places in Kashmir"
        subtitle="Markets, handicrafts & local shopping streets"
        description="Explore popular shopping markets and local handicraft destinations across **Kashmir**. Discover traditional hand-woven shawls, handmade carpets, papier-mâché art, dry fruits, spices and beautiful souvenirs crafted by local artisans. From lively bazaars to small heritage stores, this guide helps you find authentic Kashmiri products and memorable keepsakes to take home from your journey.
"
        image="img/shoppings/shopping-hero/floating-vegetable-market.jpg"
      />     
      <ShoppingsClient places={places} />

      <Footer />
    </>
  );
}