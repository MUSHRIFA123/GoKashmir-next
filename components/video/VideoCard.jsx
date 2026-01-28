// "use client";

// import React, { useState, useEffect } from "react";

// export default function VideoCard({ video }) {
//   const [formattedDate, setFormattedDate] = useState("");

//   useEffect(() => {
//     if (video?.publishedAt) {
//       setFormattedDate(new Date(video.publishedAt).toLocaleDateString());
//     }
//   }, [video]);

//   const featuredImageUrl = video.featuredImage?.url || "placeholder.jpg";
//   const featuredImageAlt = video.featuredImage?.alt || video.title || "Video";

//   if (!video) return null;

//   return (
//     <a href={`/videos/${video.slug}`} className="block">
//       <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-200 cursor-pointer">
//         <div className="relative">
//           <img
//             src={`/${featuredImageUrl}`}
//             alt={featuredImageAlt}
//             className="w-full h-48 object-cover"
//           />
//           <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
//             <svg
//               className="w-12 h-12 text-white opacity-90"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path d="M8 5v14l11-7z" />
//             </svg>
//           </div>
//         </div>

//         <div className="p-4">
//           <h2 className="font-semibold text-lg mb-1">{video.title || "Untitled Video"}</h2>
//           <p className="text-gray-500 text-sm mb-2">{video.headline || ""}</p>
//           <p className="text-gray-400 text-xs">{formattedDate}</p>
//         </div>
//       </div>
//     </a>
//   );
// }
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function VideoCard({ video }) {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    if (video?.publishedAt) {
      // Format date on client to prevent SSR mismatch
      setFormattedDate(new Date(video.publishedAt).toLocaleDateString());
    }
  }, [video]);

  const featuredImageUrl = video.featuredImage?.url || "placeholder.jpg";
  const featuredImageAlt = video.featuredImage?.alt || video.title || "Video";

  if (!video) return null;

  return (
    <Link href={`/videos/${video.slug}`} className="block">
      <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-200 cursor-pointer">
        <div className="relative">
          <img
            src={`/${featuredImageUrl}`}
            alt={featuredImageAlt}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
            <svg
              className="w-12 h-12 text-white opacity-90"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        <div className="p-4">
          <h2 className="font-semibold text-lg mb-1">{video.title || "Untitled Video"}</h2>
          <p className="text-gray-500 text-sm mb-2">{video.headline || ""}</p>
          <p className="text-gray-400 text-xs">{formattedDate}</p>
        </div>
      </div>
    </Link>
  );
}
