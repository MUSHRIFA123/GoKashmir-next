import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Generate static params for dynamic routes
export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "data/markdown/places/attractions");

  if (!fs.existsSync(dir)) {
    console.warn("Warning: attractions folder does not exist!");
    return [];
  }

  const files = fs.readdirSync(dir).filter((file) => file.endsWith(".md"));

  return files.map((file) => ({
    slug: file.replace(".md", ""),
  }));
}

// Get markdown content for a specific slug
async function getPost(slug) {
  const filePath = path.join(
    process.cwd(),
    "data/markdown/places/attractions",
    `${slug}.md`
  );

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  const processedContent = await remark().use(html).process(content);

  return {
    frontmatter: data,
    content: processedContent.toString(),
  };
}

// Page component
export default async function AttractionPage({ params }) {
  const { slug } = await params;  // ✅ Correct destructuring after await

  const post = await getPost(slug);

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl font-bold mb-6">Attraction Not Found</h1>
          <p className="text-gray-600 mb-8 text-lg">
            Sorry, we couldn't find details for "{slug}".
          </p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <article className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-6">{post.frontmatter.title}</h1>
        {post.frontmatter.description && (
          <p className="text-gray-600 mb-8 text-lg">
            {post.frontmatter.description}
          </p>
        )}
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
      <Footer />
    </>
  );
}
