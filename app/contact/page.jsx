"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setSuccess("Failed to send message. Try again.");
      }
    } catch (err) {
      setSuccess("Failed to send message. Try again.");
    }
    setLoading(false);
  };

  return (
    <>
    <Navbar/>
    <div className="bg-gray-50 dark:bg-gray-900" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-4xl font-bold dark:text-gray-100">Contact</h2>
        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto dark:text-gray-400">
          Want to contact us? Choose an option below and we'll be happy to show
          you how we can transform company's web experience.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 gap-8">
        {/* Contact info */}
        <div>
          <h2 className="text-lg font-bold dark:text-gray-100">Contact Us</h2>
          <p className="max-w-sm mt-4 mb-4 dark:text-gray-400">
            Have something to say? Fill up the form or send an email/call.
          </p>
          <div className="flex items-center mt-8 space-x-2 text-dark-600 dark:text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25..." />
            </svg>
         <span>Residency Road, Lal Chowk, Srinagar, Jammu & Kashmir 190001, India</span>
        </div>

        <div className="flex items-center mt-2 space-x-2 text-gray-600 dark:text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 003 6.75m18.75 0L12 13.5 3.25 6.75"
            />
          </svg>

          <a
            href="mailto:gokashmir.info@gmail.com"
            className="hover:underline"
          >
            gokashmir.info@gmail.com
          </a>
          </div>
          <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15..." />
            </svg>
            {/* <a href="tel:11111111111">+51 11111111111</a> */}
          </div>
        </div>

        {/* Contact form */}
        <div>
          <form onSubmit={handleSubmit}>
            <input type="hidden" name="botcheck" />
            <div className="mb-5">
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 rounded-md outline-none dark:bg-gray-900 dark:text-white"
              />
            </div>
            <div className="mb-5">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 rounded-md outline-none dark:bg-gray-900 dark:text-white"
              />
            </div>
            <div className="mb-3">
              <textarea
                placeholder="Your Message"
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 rounded-md outline-none h-36 dark:bg-gray-900 dark:text-white"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 font-semibold text-white rounded-md bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-black"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            {success && <p className="mt-3 text-green-500">{success}</p>}
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
