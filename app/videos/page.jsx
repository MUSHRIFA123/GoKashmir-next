// import Navbar from "@/components/Navbar";
// import VideosPageClient from "./VideosPageClient";
// import Footer from "@/components/Footer";

// export default async function VideosPage() {
//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

//   const res = await fetch(`${baseUrl}/api/videos`, { cache: "no-store" });
//   const videos = await res.json();

//   return (
//     <>
//     <Navbar/>
//     <VideosPageClient videos={videos} />
//     <Footer/>
//     </>
//   );

import { MongoClient } from "mongodb";
import Navbar from "@/components/Navbar";
import VideosPageClient from "./VideosPageClient";
import Footer from "@/components/Footer";

async function getVideos() {
  const uri = process.env.MONGODB_URI;
  const dbName = process.env.MONGODB_DB;
  let client;

  if (!uri || !dbName) {
    console.error("Missing MONGODB_URI or MONGODB_DB");
    return [];
  }

  try {
    client = new MongoClient(uri);
    await client.connect();
    const db = client.db(dbName);
    
    // Get videos and convert MongoDB ObjectId to string
    const videos = await db.collection("videos").find({}).toArray();
    return videos.map(video => ({
      ...video,
      _id: video._id.toString(), // ✅ Fix serialization
    }));
  } catch (err) {
    console.error("MongoDB Error:", err);
    return [];
  } finally {
    await client?.close();
  }
}

export default async function VideosPage() {
  const videos = await getVideos();

  return (
    <>
      <Navbar />
      <VideosPageClient videos={videos} />
      <Footer />
    </>
  );
}
