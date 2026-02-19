"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-green-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-green-100">
            Go <span className="text-green-300">Kashmir</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-5 items-center">
            <li>
              <Link href="/" className="hover:text-white">Home</Link>
            </li>
            <li>
              <Link href="/categories" className="hover:text-white">Categories</Link>
            </li>
            <li>
              <Link href="/news" className="hover:text-white">News</Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-white">Events</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">Contact Us</Link>
            </li>
            <li>
              <Link href="/bucket-list">
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
                  Bucket List
                </button>
              </Link>
            </li>
          </ul>

          {/* Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden space-y-2 pb-4">
            <li>
              <Link href="/" className="block hover:text-white">Home</Link>
            </li>
            <li>
              <Link href="/categories" className="block hover:text-white">Categories</Link>
            </li>
            <li>
              <Link href="/news" className="block hover:text-white">News</Link>
            </li>
            <li>
              <Link href="/blog" className="block hover:text-white">Blog</Link>
            </li>
            <li>
              <Link href="/bucket-list">
                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded mt-2">
                  Bucket List
                </button>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}
