import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { connectDB } from "@/lib/mongodb";
import News from "@/models/News";
import { marked } from "marked";
import Image from 'next/image';

export default async function NewsDetail({ params }) {
  const { slug } = params;

  // Connect to MongoDB
  await connectDB();
  const newsItem = await News.findOne({ slug }).lean();

  if (!newsItem) {
    return <p className="text-center text-red-500 mt-6">News not found</p>;
  }

  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto p-6">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-2">{newsItem.title}</h1>
        <p className="text-gray-500 mb-4">
          {newsItem.dateLocation || new Date(newsItem.publishedAt).toLocaleDateString()}
        </p>

        {/* Featured Image with caption & clickable credit */}
        {newsItem.featuredImage?.url && (
          <div className="mb-4">
            <img
              src={newsItem.featuredImage.url}
              alt={newsItem.featuredImage.alt || newsItem.title}
              className="w-full h-80 object-cover rounded"
            />
            {newsItem.featuredImage.caption && (
              <p className="text-gray-500 text-sm mt-1 italic">{newsItem.featuredImage.caption}</p>
            )}
            {newsItem.featuredImage.source && newsItem.featuredImage.sourceUrl ? (
              <p className="text-gray-400 text-xs mt-1 italic">
                Image Credit:{" "}
                <a
                  href={newsItem.featuredImage.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-indigo-600"
                >
                  {newsItem.featuredImage.source}
                </a>
              </p>
            ) : newsItem.featuredImage.source ? (
              <p className="text-gray-400 text-xs mt-1 italic">
                Image Credit: {newsItem.featuredImage.source}
              </p>
            ) : null}
          </div>
        )}

        {/* Headline / Subheadline */}
        {newsItem.headline && <h2 className="text-xl font-semibold mb-2">{newsItem.headline}</h2>}
        {newsItem.subheadline && <p className="text-gray-700 mb-4">{newsItem.subheadline}</p>}

        {/* Markdown Content */}
        {newsItem.content && (
          <div
            className="prose max-w-none text-gray-800"
            dangerouslySetInnerHTML={{ __html: marked.parse(newsItem.content) }}
          />
        )}

        {/* Key Points */}
        {newsItem.keyPoints && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Key Points</h3>
            <ul className="list-disc list-inside space-y-1">
              {newsItem.keyPoints.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Tags */}
        {newsItem.tags && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {newsItem.tags.map((tag, idx) => (
                <span key={idx} className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
