"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import React from "react";
import ReactMarkdown from "react-markdown";

export default function AttractionPage({ params }) {
  const resolvedParams = React.use(params);
  const { slug } = resolvedParams;

  const [place, setPlace] = useState(null);
  const [faqOpen, setFaqOpen] = useState({});

  useEffect(() => {
    fetch(`/api/places/${slug}`)
      .then((res) => res.json())
      .then((data) => {
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
    <>
    <Navbar/>
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold">{place.title}</h1>
      <p className="text-gray-500">{place.locality}</p>

      {/* ✅ FIXED: Now uses place.image.url */}
      <img
        src={place.image.url}                    // ✅ FIXED
        alt={place.image.alt || place.title}     // ✅ FIXED with fallback
        className="w-full h-80 object-cover rounded"
      />

      <div className="space-y-4">
        <p className="text-gray-600 font-semibold">{place.description_seo}</p>

        {/* Render markdown description */}
        <div className="prose max-w-none prose-headings:text-green-900 prose-a:text-blue-600">
          <ReactMarkdown>{place.description}</ReactMarkdown>
        </div>
        
        <br />
        <p>
          <strong>Address:</strong> {place.address_line_1}, {place.address_line_2}
        </p>

        <p>
          <strong>Area:</strong> {place.area} | <strong>Category:</strong>{" "}
          {place.category}
        </p>

        <p>
          <strong>Features:</strong> {place.features}
        </p>

        <p>
          <strong>Travel Information:</strong> {place.travel_information}
        </p>
      </div>

      {place.faqs && place.faqs.length > 0 && (
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
      )}
    </div>
    <Footer/>
    </>
  );
}
