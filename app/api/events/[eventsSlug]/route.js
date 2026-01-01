import { connectDB } from "@/lib/mongodb";
import Events from "@/models/Events";
import { marked } from "marked";

export default async function EventsDetail({ params }) {
  const { slug } = params;

  await connectDB();
  const eventsItem = await Events.findOne({ slug }).lean();

  if (!eventsItem) {
    return <p>Events not found</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-2">{eventsItem.title}</h1>
      <p className="text-gray-500 mb-4">{eventsItem.dateLocation || eventsItem.publishedAt}</p>

      {/* Featured Image */}
      {eventsItem.featuredImage?.url && (
        <img
          src={eventsItem.featuredImage.url}
          alt={eventsItem.featuredImage.alt || eventsItem.title}
          className="w-full h-80 object-cover rounded mb-6"
        />
      )}

      {/* Headline / Subheadline */}
      {eventsItem.headline && <h2 className="text-xl font-semibold mb-2">{eventsItem.headline}</h2>}
      {eventsItem.subheadline && <p className="text-gray-700 mb-4">{eventsItem.subheadline}</p>}

      {/* Render Markdown Content */}
      {eventsItem.content && (
        <div
          className="prose max-w-none text-gray-800"
          dangerouslySetInnerHTML={{ __html: marked.parse(eventsItem.content) }}
        />
      )}

      {/* Key Points */}
      {eventsItem.keyPoints && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Key Points</h3>
          <ul className="list-disc list-inside space-y-1">
            {eventsItem.keyPoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Companies */}
      {eventsItem.company && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Companies</h3>
          <ul className="space-y-2">
            {eventsItem.company.map((c, idx) => (
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
      {eventsItem.tags && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {eventsItem.tags.map((tag, idx) => (
              <span key={idx} className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Source */}
      {eventsItem.source && (
        <p className="mt-6 text-gray-500 text-sm">
          Source: {eventsItem.source} | Distributor: {eventsItem.distributor || "N/A"}
        </p>
      )}
    </div>
  );
}