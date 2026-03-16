import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { connectDB } from "@/lib/mongodb";
import { Article } from "@/models/articles";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

export const dynamic = "force-dynamic";

export default async function SingleGuidePage({ params }) {
  const { slug } = params;

  // Connect to MongoDB
  await connectDB();

  // Fetch the single guide by slug
  const guide = await Article.findOne({ slug, category: "travel-guide" })
    .select("title content image") // fetch only what we need
    .lean();

  if (!guide) {
    return <p className="p-6 text-red-600">Travel guide not found!</p>;
  }

  return (
    <>
    <Navbar/>
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{guide.title}</h1>

      {guide.image && (
        <Image
          src={guide.image}
          alt={guide.title}
          width={800}
          height={400}
          className="w-full h-auto rounded mb-6"
        />
      )}

      <div className="prose max-w-full">
        <ReactMarkdown>{guide.content}</ReactMarkdown>
      </div>
    </div>
    <Footer/>
    </>
  );
}