'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function SitemapPage() {
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto py-10">
        <h1 className="text-4xl font-bold py-10 text-center">Sitemap - GoKashmir</h1>

        {/* MAIN PAGES */}
        <div>
          <h2 className="text-3xl font-bold py-6">Main Pages</h2>
          <ul className="py-4 list-disc list-inside space-y-2 text-lg text-red-800">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/categories">Categories</Link></li>
            <li><Link href="/attractions">Attractions</Link></li>
            <li><Link href="/restaurants">Restaurants</Link></li>
            <li><Link href="/culture-and-heritage">Culture & Heritage</Link></li>
            <li><Link href="/shoppings">Shoppings</Link></li>
            <li><Link href="/seasons-and-weather">Seasons & Weather</Link></li>
            <li><Link href="/trekkings-and-adventures">Trekkings & Adventures</Link></li>
            <li><Link href="/news">News</Link></li>
            <li><Link href="/bucket-list">Bucket List</Link></li>
            <li><Link href="/about-kashmir">About Kashmir</Link></li>
          </ul>
        </div>

        {/* GALLERIES */}
        <div>
          <h2 className="text-3xl font-bold py-6">Galleries</h2>
          <ul className="py-4 list-disc list-inside space-y-2 text-lg text-red-800">
            <li><Link href="/gulmarg-gallery">Gulmarg Gallery</Link></li>
            <li><Link href="/pahalgam-gallery">Pahalgam Gallery</Link></li>
            <li><Link href="/sonamarg-gallery">Sonamarg Gallery</Link></li>
            <li><Link href="/srinagar-gallery">Srinagar Gallery</Link></li>
          </ul>
        </div>

        {/* EVENTS */}
        <div>
          <h2 className="text-3xl font-bold py-6">Events</h2>
          <ul className="py-4 list-disc list-inside space-y-2 text-lg text-red-800">
            <li><Link href="/events">Events</Link></li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  )
}
