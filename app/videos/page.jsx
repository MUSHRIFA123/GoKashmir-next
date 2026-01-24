import Navbar from "@/components/Navbar";
import VideosPageClient from "./VideosPageClient";
import Footer from "@/components/Footer";

export default async function VideosPage() {
  // ✅ FIXED: Use relative URL - works on localhost AND Vercel
  const res = await fetch("/api/videos", { cache: "no-store" });
  const videos = await res.json();

  return (
    <>
      <Navbar/>
      <VideosPageClient videos={videos} />
      <Footer/>
    </>
  );
}
