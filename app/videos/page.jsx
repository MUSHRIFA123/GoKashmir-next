import Navbar from "@/components/Navbar";
import VideosPageClient from "./VideosPageClient";
import Footer from "@/components/Footer";

export default async function VideosPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/videos`, { cache: "no-store" });
  const videos = await res.json();

  return (
    <>
    <Navbar/>
    <VideosPageClient videos={videos} />
    <Footer/>
    </>
  );
}
