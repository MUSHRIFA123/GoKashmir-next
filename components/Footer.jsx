import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-r from-green-50 to-emerald-100 dark:from-gray-900 dark:to-black text-gray-900 dark:text-white py-12 px-4 font-inter border-t border-green-200 dark:border-gray-800">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Branding */}
          <div className="space-y-4">
            {/* Logo */}
            <div className="logo text-[28px] font-bold text-green-100">
              Go <span className="text-green-300">Kashmir</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              GoKashmir is your trusted travel guide to explore the beauty of
              Kashmir — from snow-covered winters to blooming spring gardens,
              scenic valleys, and peaceful houseboat stays.
            </p>

            {/* Social Icons */}
          <div className="flex space-x-5 pt-2">
            {/* Instagram */}
            <Link
              href="https://www.instagram.com/accounts/onetap/?next=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-green-600 dark:text-gray-400 dark:hover:text-emerald-400 transition-transform transform hover:scale-110"
              aria-label="GoKashmir Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 2c-2.757 0-5 2.243-5 5v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5v-10c0-2.757-2.243-5-5-5h-10zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3h-10c-1.654 0-3-1.346-3-3v-10c0-1.654 1.346-3 3-3h10zm-5 3c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 2c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm4.5-.9a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z" />
              </svg>
            </Link>

            {/* Facebook */}
            <Link
              href="https://www.facebook.com/people/Kashmir-Go/pfbid02mpZjsUsMpL8HagYgfVdvyYnhRDUV7QVLn399K7xNe9fyfUmkx1SGvGVYj9XvqFLRl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-green-600 dark:text-gray-400 dark:hover:text-emerald-400 transition-transform transform hover:scale-110"
              aria-label="GoKashmir Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .732.593 1.324 1.325 1.324h11.495v-9.294h-3.13v-3.622h3.13v-2.672c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12v9.294h6.116c.73 0 1.323-.592 1.323-1.324v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
              </svg>
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/company/gokashmirofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-green-600 dark:text-gray-400 dark:hover:text-emerald-400 transition-transform transform hover:scale-110"
              aria-label="GoKashmir LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </Link>
          </div>

          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-green-600">Home</Link></li>
              <li><Link href="/about-kashmir" className="text-gray-600 dark:text-gray-300 hover:text-green-600">About Kashmir</Link></li>
              <li><Link href="/categories" className="text-gray-600 dark:text-gray-300 hover:text-green-600">Places to Visit</Link></li>
              <li><Link href="/seasons-and-weather" className="text-gray-600 dark:text-gray-300 hover:text-green-600">Best Time to Visit</Link></li>
              <li><Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-green-600">Travel Blog</Link></li>
            </ul>
          </div>

          {/* Travel Resources */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              Travel Resources
            </h3>
            <ul className="space-y-3">
              <li><Link href="/itinearies" className="text-gray-600 dark:text-gray-300 hover:text-green-600">Itineraries</Link></li>
              <li><Link href="#tips" className="text-gray-600 dark:text-gray-300 hover:text-green-600">Travel Tips</Link></li>
              {/* <li><Link href="#faq" className="text-gray-600 dark:text-gray-300 hover:text-green-600">FAQs</Link></li> */}
              <li><Link href="/(fixed)/privacy-policy" className="text-gray-600 dark:text-gray-300 hover:text-green-600">Privacy Policy</Link></li>
              <li><Link href="#partner-with-us" className="text-gray-600 dark:text-gray-300 hover:text-green-600">Partner With Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              Contact Us
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Kashmir, India
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Email: <Link 
                        href="mailto:gokashmir.info@gmail.com" 
                        className="text-blue-600 hover:underline"
                      >
                        gokashmir.info@gmail.com
                      </Link>
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              For partnerships & collaborations
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-7 border-t border-green-200 dark:border-gray-700">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              © 2025 GoKashmir. All rights reserved.
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 lg:mt-0">
              Crafted with ❤️ for Kashmir
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
