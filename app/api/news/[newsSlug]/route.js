import { connectDB } from "@/lib/mongodb";
import News from "@/models/News";
import { marked } from "marked";

export default async function NewsDetail({ params }) {
  const { slug } = params;

  await connectDB();
  const newsItem = await News.findOne({ slug }).lean();

  if (!newsItem) {
    return <p>News not found</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-2">{newsItem.title}</h1>
      <p className="text-gray-500 mb-4">{newsItem.dateLocation || newsItem.publishedAt}</p>

      {/* Featured Image */}
      {newsItem.featuredImage?.url && (
        <img
          src={newsItem.featuredImage.url}
          alt={newsItem.featuredImage.alt || newsItem.title}
          className="w-full h-80 object-cover rounded mb-6"
        />
      )}

      {/* Headline / Subheadline */}
      {newsItem.headline && <h2 className="text-xl font-semibold mb-2">{newsItem.headline}</h2>}
      {newsItem.subheadline && <p className="text-gray-700 mb-4">{newsItem.subheadline}</p>}

      {/* Render Markdown Content */}
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

      {/* Companies */}
      {newsItem.company && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Companies</h3>
          <ul className="space-y-2">
            {newsItem.company.map((c, idx) => (
              <li key={idx}>
                <a href={c.website} target="_blank" className="text-indigo-600 hover:underline">
                  {c.name}
                </a>{" "}
                - {c.description} ({c.location})
              </li>
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

      {/* Source */}
      {newsItem.source && (
        <p className="mt-6 text-gray-500 text-sm">
          Source: {newsItem.source} | Distributor: {newsItem.distributor || "N/A"}
        </p>
      )}
    </div>
  );
}