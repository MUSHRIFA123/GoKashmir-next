import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { connectDB } from "@/lib/mongodb";
import { Article } from "@/models/articles"; // named import
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function TravelGuidePage() {
  await connectDB(); // initialize Mongoose

  const guides = await Article.find({ category: "travel-guide" })
    .select("title slug image")
    .lean();

  return (
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Travel Guides</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map((guide) => (
          <div
            key={guide._id.toString()}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
           {guide.image ? (
                <Image
                  src={`/img/travel-guide/${guide.image}`}
                  alt={guide.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
              ) : (
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                No Image
              </div>
            )}
            <div className="p-4">
              <h2 className="font-bold text-lg">{guide.title}</h2>
              <a
                href={`/travel-guide/${guide.slug}`}
                className="text-blue-600 hover:underline mt-2 block"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}