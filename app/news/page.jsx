// pages/news/index.js
import Link from "next/link";
import { connectDB } from "@/lib/mongodb";
import News from "@/models/News";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedCards from "@/components/RelatedCards";

export default async function NewsPage() {
  await connectDB();

  const newsList = await News.find({}).sort({ publishedAt: -1 }).lean();

  if (!newsList || newsList.length === 0) {
    return <p className="text-center mt-6">No news found</p>;
  }

  const mainNews = newsList[0];
  const middleNews = newsList.slice(1, 5);
  const rightNews = newsList[5];

  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-10">

          {/* Left main featured news */}
          {mainNews && (
            <div className="sm:col-span-6 lg:col-span-5">
              <Link href={`/news/${mainNews.slug}`}>
                <div
                  className="h-56 bg-cover text-center overflow-hidden rounded"
                  style={{
                    backgroundImage: `url("${mainNews.featuredImage?.url || '/placeholder.jpg'}")`,
                  }}
                  title={mainNews.title}
                />
              </Link>
              <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal p-4">
                <Link
                  href={`/news/${mainNews.slug}`}
                  className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 transition duration-500 ease-in-out"
                >
                  {mainNews.title}
                </Link>
                <p className="text-gray-600 text-xs">
                  {new Date(mainNews.publishedAt).toLocaleDateString()}
                </p>
                <p className="text-gray-700 text-xs mt-2">
                  {mainNews.headline || (mainNews.content?.slice(0, 100) + "...")}
                </p>
              </div>
            </div>
          )}

          {/* Middle smaller news */}
          <div className="sm:col-span-6 lg:col-span-4">
            {middleNews.map((news) => (
              <div key={news._id} className="flex items-start mb-3 pb-3 border-b border-gray-200">
                <Link href={`/news/${news.slug}`} className="inline-block mr-3">
                  <div
                    className="w-20 h-20 bg-cover bg-center rounded"
                    style={{
                      backgroundImage: `url("${news.featuredImage?.url || '/placeholder.jpg'}")`,
                    }}
                  />
                </Link>
                <div className="text-sm w-2/3">
                  <p className="text-gray-600 text-xs">
                    {new Date(news.publishedAt).toLocaleDateString()}
                  </p>
                  <Link
                    href={`/news/${news.slug}`}
                    className="text-gray-900 font-medium hover:text-indigo-600 leading-none"
                  >
                    {news.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Right small featured news */}
          {rightNews && (
            <div className="sm:col-span-12 lg:col-span-3">
              <Link href={`/news/${rightNews.slug}`}>
                <div
                  className="h-56 bg-cover text-center overflow-hidden rounded"
                  style={{
                    backgroundImage: `url("${rightNews.featuredImage?.url || '/placeholder.jpg'}")`,
                  }}
                  title={rightNews.title}
                />
              </Link>
              <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal p-4">
                <Link
                  href={`/news/${rightNews.slug}`}
                  className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 transition duration-500 ease-in-out"
                >
                  {rightNews.title}
                </Link>
                <p className="text-gray-600 text-xs">
                  {new Date(rightNews.publishedAt).toLocaleDateString()}
                </p>
                <p className="text-gray-700 text-xs mt-2">
                  {rightNews.headline || (rightNews.content?.slice(0, 100) + "...")}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <RelatedCards />
      <Footer />
    </>
  );
}
