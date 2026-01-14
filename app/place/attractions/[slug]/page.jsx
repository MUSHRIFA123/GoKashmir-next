import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "data/markdown/places/attractions");
  const files = fs.readdirSync(dir);

  return files.map((file) => ({
    slug: file.replace(".md", ""),
  }));
}

async function getPost(slug) {
  const filePath = path.join(
    process.cwd(),
    "data/markdown/places/attractions",
    `${slug}.md`
  );

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  const processedContent = await remark()
    .use(html)
    .process(content);

  return {
    frontmatter: data,
    content: processedContent.toString(),
  };
}

export default async function AttractionPage({ params }) {
  const { slug } = params;
  const post = await getPost(slug);

  return (
    <>
      <Navbar />

      <article className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-6">
          {post.frontmatter.title}
        </h1>

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
