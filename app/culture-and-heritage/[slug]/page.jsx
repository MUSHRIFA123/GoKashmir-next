import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function AttractionPage({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const filePath = path.join(process.cwd(), "data/markdown/culture-and-heritage", `${slug}.md`);

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const html = marked(content);

  // Console log for local debugging (visible in terminal)
  console.log(`Rendering culture-and-heritage: ${data.title || slug} (${slug})`);

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">
          {data.title || slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
        </h1>

        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      <Footer />
    </>
  );
}
