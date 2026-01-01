import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedCards from "@/components/RelatedCards";
import HomepageEvents from "@/components/home/HomepageEvents";

export default async function NewsPage() {
  return (
    <>
      <Navbar/>
      
      <div className="space-y-[-3]"> {/* remove vertical spacing */}
        <HomepageEvents/>
        <RelatedCards/>
      </div>

      <Footer/>
    </>
  );
}
