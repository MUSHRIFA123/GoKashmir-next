import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedCards from "@/components/RelatedCards";
import CultureAndHeritageGuide from "@/data/json/CultureAndHeritageGuide";
import CultureClient from "./CultureClient";
import ListingHero from "@/components/ListingHero";

export const metadata = {
  title: "Culture and Heritage of Kashmir – Traditions, Art and History",
  description:
    "Explore the rich culture and heritage of Kashmir including traditions, architecture, crafts, music and historical landmarks.",
};

export default function CultureAndHeritagePage() {
  return (
    <>
      <Navbar />
      <ListingHero
        title="Culture & Heritage of Kashmir"
        subtitle="Traditions, architecture and history"
        description="Experience the rich cultural heritage of **Kashmir** through its timeless traditions, graceful architecture, vibrant festivals, exquisite handicrafts, and deeply rooted spiritual places. From centuries-old shrines and wooden mosques to colourful local celebrations and artisan workshops, every corner reflects the region’s living history. This guide helps you explore the cultural soul of Kashmir and understand the stories, skills, and beliefs that continue to shape everyday life in the valley."
        image="img\culture-and-heritage\culture-hero\baba-art-and-crafts.jpg"
      />
      <CultureClient items={CultureAndHeritageGuide} />

      <RelatedCards />
      <Footer />
    </>
  );
}