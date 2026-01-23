"use client";

import React, { useState, useEffect, useMemo } from "react";
import VideoCard from "components/video/VideoCard";

export default function VideosPageClient({ videos }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentVideos, setCurrentVideos] = useState([]);
  const videosPerPage = 9;

  // Memoize sortedVideos so it doesn't recreate on every render
  const sortedVideos = useMemo(() => {
    return [...videos].sort((a, b) => {
      const dateA = new Date(a.publishedAt).getTime();
      const dateB = new Date(b.publishedAt).getTime();
      return dateB - dateA;
    });
  }, [videos]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * videosPerPage;
    const endIndex = startIndex + videosPerPage;
    setCurrentVideos(sortedVideos.slice(startIndex, endIndex));
  }, [currentPage, sortedVideos]);

  const totalPages = Math.ceil(sortedVideos.length / videosPerPage);

  if (!videos || videos.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">Videos</h1>
        <p>No videos found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Videos</h1>
      <p className="text-gray-600 mb-8">
        Explore our collection of videos featuring product demos, case studies, webinars, and industry insights.
      </p>

      {/* Videos Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {currentVideos.map(video => (
          <VideoCard
            key={video._id?.$oid || video.slug || Math.random()}
            video={video}
          />
        ))}
      </div>

      {/* Pagination Numbers */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 space-x-2">
          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentPage(idx + 1);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`px-3 py-1 rounded ${
                currentPage === idx + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
