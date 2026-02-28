import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedCards from "@/components/RelatedCards";
import SeasonGuide from "@/data/json/SeasonGuide";
import SeasonsClient from "./SeasonsClient";
import ListingHero from "@/components/ListingHero";

export const metadata = {
  title: "Best Season and Weather Guide for Kashmir",
  description:
    "Complete season and weather guide for Kashmir including best time to visit, travel tips and seasonal highlights.",
};

export default async function SeasonsAndWeatherPage() {
  return (
    <>
      <Navbar />
      <ListingHero
        title="Seasons & Weather of Kashmir"
        subtitle="Best time to visit, climate and travel tips"
        description="Discover the changing seasons and weather of Kashmir, from fresh spring blossoms and pleasant summer days to colourful autumn landscapes and snow-covered winters. Each season offers a unique travel experience — whether you want to enjoy sightseeing, outdoor activities, photography, or a peaceful mountain escape. This guide helps you understand monthly weather patterns, temperature changes and the best time to plan your perfect Kashmir trip."
        image="img/seasons/season-hero/srinagar.jpg"
      />
            <SeasonsClient guides={SeasonGuide} />
      <RelatedCards />
      <Footer />
    </>
  );
}