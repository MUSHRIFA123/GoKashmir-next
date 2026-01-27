// import { MongoClient } from "mongodb";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import VideoActions from "@/components/video/VideoActions";

// async function getVideoBySlug(slug) {
//   const client = new MongoClient(process.env.MONGODB_URI);
//   await client.connect();
//   const db = client.db(process.env.MONGODB_DB);
//   const video = await db.collection("videos").findOne({ slug });

//   if (video) video._id = video._id.toString();
//   await client.close();
//   return video;
// }

// export default async function VideoPage({ params }) {
//   const { slug } = await params;
//   const video = await getVideoBySlug(slug);

//   if (!video) {
//     return <p className="text-center py-10">Video not found</p>;
//   }

//   // Extract YouTube ID safely
//   const youtubeId = video.videoUrl?.includes("v=")
//     ? video.videoUrl.split("v=")[1].split("&")[0]
//     : "";

//   const channelUrl = video.featuredImage?.source || video.videoUrl;

//   return (
//     <>
//       <Navbar />

//       <div className="max-w-5xl mx-auto px-4 py-10">
//         {/* Title */}
//         <h1 className="text-3xl font-bold mb-2">{video.title}</h1>

//         {/* Channel / Company */}
//         <p className="text-gray-500 mb-4">
//           {video.company?.[0]?.name}
//         </p>

//         {/* ✅ VIDEO ONLY (NO IMAGE) */}
//         {youtubeId && (
//           <div className="mb-6 aspect-video">
//             <iframe
//               className="w-full h-full rounded-lg"
//               src={`https://www.youtube.com/embed/${youtubeId}`}
//               title={video.title}
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             />
//           </div>
//         )}

//         {/* ✅ Buttons (Client Component) */}
//         <VideoActions
//           title={video.title}
//           channelUrl={channelUrl}
//         />

//         {/* Description */}
//         <p className="text-gray-700 mb-6">
//           {video.content}
//         </p>

//         {/* Key Points */}
//         {video.keyPoints?.length > 0 && (
//           <ul className="list-disc pl-5 mb-6">
//             {video.keyPoints.map((point, idx) => (
//               <li key={idx}>{point}</li>
//             ))}
//           </ul>
//         )}

//         {/* Source */}
//         <p className="text-gray-400 text-sm">
//           Source: {video.source}
//         </p>
//       </div>

//       <Footer />
//     </>
//   );
// }
import { MongoClient } from "mongodb";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoActions from "@/components/video/VideoActions";

async function getVideoBySlug(slug) {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db(process.env.MONGODB_DB);
  const video = await db.collection("videos").findOne({ slug });

  if (video) video._id = video._id.toString();
  await client.close();
  return video;
}

export default async function VideoPage({ params }) {
  const { slug } = await params;
  const video = await getVideoBySlug(slug);

  if (!video) {
    return <p className="text-center py-10">Video not found</p>;
  }

  // Extract YouTube ID safely
  const youtubeId = video.videoUrl?.includes("v=")
    ? video.videoUrl.split("v=")[1].split("&")[0]
    : "";

  const channelUrl = video.featuredImage?.source || video.videoUrl;

  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-2">{video.title}</h1>

        {/* Channel / Company with Verified Icon */}
        <p className="text-gray-500 mb-4 flex items-center gap-2">
          {video.company?.[0]?.verified && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-blue-500"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12 0C5.372 0 0 5.372 0 12c0 6.627 5.372 12 12 12 6.627 0 12-5.373 12-12C24 5.372 18.627 0 12 0zm6.707 9.293a1 1 0 00-1.414-1.414L10 15.172l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8z"
                clipRule="evenodd"
              />
            </svg>
          )}
          {video.company?.[0]?.name}
        </p>

        {/* Published Date */}
        <p className="text-gray-400 text-sm mb-6">
          {video.publishedAt
            ? new Date(video.publishedAt).toLocaleDateString()
            : ""}
        </p>

        {/* Video */}
        {youtubeId && (
          <div className="mb-6 aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${youtubeId}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        {/* Buttons (Client Component) */}
        <VideoActions title={video.title} channelUrl={channelUrl} />

        {/* Description */}
        <p className="text-gray-700 mb-6">{video.content}</p>

        {/* Key Points */}
        {video.keyPoints?.length > 0 && (
          <ul className="list-disc pl-5 mb-6">
            {video.keyPoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        )}

        {/* Source */}
        <p className="text-gray-400 text-sm">Source: {video.source}</p>
      </div>

      <Footer />
    </>
  );
}
