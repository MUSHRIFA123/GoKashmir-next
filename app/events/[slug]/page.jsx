import { connectDB } from "@/lib/mongodb";
import Events from "@/models/Events";
import { notFound } from "next/navigation";
import { marked } from "marked";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from 'next/image';

export default async function EventsDetail({ params }) {
  const { slug } = await params;

  await connectDB();

  const event = await Events.findOne({ slug }).lean();

  if (!event) return notFound();

  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto p-6">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-2">{event.title}</h1>
        <p className="text-gray-500 mb-4">
          {event.location} | {new Date(event.start_date).toLocaleDateString()}
        </p>

        {/* Image */}
        {event.images?.[0] && (
          <Image
            src={event.images[0]}
            alt={event.title}
            width={1200}
            height={320}
            className="w-full h-80 object-cover rounded mb-6"
            priority
          />
        )}

        {/* Short Description */}
        <p className="mb-4">{event.short_description}</p>

        {/* Long Description (Markdown) */}
        {event.long_description && (
          <div
            className="prose max-w-none text-gray-800 mb-6 prose-headings:text-gray-900"
            dangerouslySetInnerHTML={{ __html: marked.parse(event.long_description) }}
          />
        )}

        {/* Highlights */}
        {event.highlights?.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Highlights</h2>
            <ul className="list-disc list-inside space-y-1">
              {event.highlights.map((h, idx) => (
                <li key={idx}>{h}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Tags */}
        {event.tags?.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {event.tags.map((tag, idx) => (
              <span key={idx} className="bg-gray-200 px-2 py-1 rounded text-sm">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
