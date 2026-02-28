import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedCards from "@/components/RelatedCards";


export const metadata = {
  title: "Culture and Heritage of Kashmir – Traditions, Art and History",
  description:
    "Explore the rich culture and heritage of Kashmir including traditions, architecture, crafts, music and historical landmarks.",
};

export default function TrekkingHeritagePage() {
  return (
    <>
      <Navbar />

     

      <RelatedCards />
      <Footer />
    </>
  );
}