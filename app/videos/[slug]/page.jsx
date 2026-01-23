import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export default async function VideoPage({ params }) {
  const { slug } = await params;  // Fix: Await params before destructuring
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/videos/${slug}`, { cache: "no-store" });
  const video = await res.json();

  if (!video || video.error) {
    return <p className="text-center py-10">Video not found.</p>;
  }

  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-2">{video.title}</h1>
        <p className="text-gray-500 mb-4">{video.company?.[0]?.name}</p>
        <p className="text-gray-400 text-sm mb-6">
          {video.publishedAt ? new Date(video.publishedAt).toLocaleDateString() : ""}
        </p>

        {video.videoUrl && (
          <div className="mb-6">
            <iframe
              width="100%"
              height="480"
              src={video.videoUrl.replace("watch?v=", "embed/")}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}

        <p className="text-gray-700 mb-6">{video.content}</p>

        {video.keyPoints?.length > 0 && (
          <ul className="list-disc pl-5 mb-6">
            {video.keyPoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        )}

        <p className="text-gray-500 text-sm">Source: {video.source}</p>
      </div>
      <Footer />
    </>
  );
}
