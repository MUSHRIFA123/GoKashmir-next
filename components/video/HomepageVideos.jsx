"use client";

import React, { useState } from "react";
import VideoCard from "../video/VideoCard.jsx";
import Link from "next/link";

export default function HomepageVideos({ videos }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videosPerView = 4; // number of full videos visible
  const videoWidthPercent = 22; // each video width (adjusted for gap)

  const totalVideos = videos.length;

  // Move 1 forward
  const handleNext = () => {
    if (currentIndex < totalVideos - 1) setCurrentIndex(currentIndex + 1);
  };

  // Move 1 backward
  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">Latest Videos</h2>
            <Link
            href="/videos" // Link to all videos page
            className="text-blue-600 font-medium flex items-center hover:underline"
            >
            View All
            <span className="ml-1">→</span>
            </Link>
        </div>
      <div className="overflow-hidden relative">
        {/* Videos Row */}
        <div
          className="flex transition-transform duration-300 gap-4"
          style={{
            transform: `translateX(-${currentIndex * (videoWidthPercent + 1)}%)`,
          }}
        >
          {videos.map(video => (
            <div key={video._id} className={`flex-shrink-0 w-[${videoWidthPercent}%]`}>
              <VideoCard video={video} />
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        {totalVideos > videosPerView && (
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded opacity-80 hover:opacity-100 disabled:opacity-40 z-10"
          >
            ◀
          </button>
        )}

        {/* Right Arrow */}
        {totalVideos > videosPerView && (
          <button
            onClick={handleNext}
            disabled={currentIndex >= totalVideos - videosPerView}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded opacity-80 hover:opacity-100 disabled:opacity-40 z-10"
          >
            ▶
          </button>
        )}
      </div>
    </div>
  );
}
