// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";
// import { marked } from "marked";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// export default async function AttractionPage({ params }) {
//   const resolvedParams = await params;
//   const { slug } = resolvedParams;

//   const filePath = path.join(process.cwd(), "data/markdown/attractions", `${slug}.md`);

//   const fileContent = fs.readFileSync(filePath, "utf-8");
//   const { data, content } = matter(fileContent);

//   const html = marked(content);

//   // Console log for local debugging (visible in terminal)
//   console.log(`Rendering attraction: ${data.title || slug} (${slug})`);

//   return (
//     <>
//       <Navbar />
//       <div className="max-w-4xl mx-auto py-12 px-4">
//         <h1 className="text-3xl font-bold mb-6">
//           {data.title || slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
//         </h1>

//         <div
//           className="prose max-w-none"
//           dangerouslySetInnerHTML={{ __html: html }}
//         />
//       </div>
//       <Footer />
//     </>
//   );
// }
// app/attractions/[slug]/page.js
// app/attractions/[slug]/page.jsx
"use client";

import { useEffect, useState } from "react";
import React from "react";

export default function PlacePage({ params }) {
  const resolvedParams = React.use(params);
  const { slug } = resolvedParams;

  const [place, setPlace] = useState(null);
  const [faqOpen, setFaqOpen] = useState({});

  useEffect(() => {
    fetch(`/api/places/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        // Only allow Attractions category
        if (data.category_slug === "attractions") {
          setPlace(data);
        }
      });
  }, [slug]);

  const toggleFaq = (index) => {
    setFaqOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  if (!place) return <p>Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold">{place.title}</h1>
      <p className="text-gray-500">{place.locality}</p>

      <img
        src={place.image}
        alt={place.title}
        className="w-full h-80 object-cover rounded"
      />

      <div className="space-y-4">
        <p className="text-gray-600 font-semibold">{place.description_seo}</p>
        <p className="text-gray-700">{place.description}</p>

        <p>
          <strong>Address:</strong> {place.address_line_1}, {place.address_line_2}
        </p>

        <p>
          <strong>Area:</strong> {place.area} | <strong>Category:</strong>{" "}
          {place.category}
        </p>

        <p>
          <strong>Average Rating:</strong> {place.average_rating} |{" "}
          <strong>Reviews:</strong> {place.reviews}
        </p>

        <p>
          <strong>Features:</strong> {place.features}
        </p>

        <p>
          <strong>Travel Information:</strong> {place.travel_information}
        </p>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
        <div className="space-y-2">
          {place.faqs.map((faq, index) => (
            <div key={index} className="border rounded">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left px-4 py-2 font-medium bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
              >
                {faq.question}
                <span>{faqOpen[index] ? "▲" : "▼"}</span>
              </button>
              {faqOpen[index] && (
                <div className="px-4 py-2 bg-white">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
