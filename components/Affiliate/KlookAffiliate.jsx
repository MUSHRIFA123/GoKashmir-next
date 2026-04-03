"use client";

import { useEffect } from "react";

export default function KlookSidebars() {
  useEffect(() => {
    // Load Klook affiliate widget script
    const script = document.createElement("script");
    script.src = "https://affiliate.klook.com/widget/fetch-iframe-init.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // cleanup
    };
  }, []);

  // Left sidebar promo codes data
  const promoCodes = [
    {
      title: "Europe Railway tickets",
      code: "SPRINGEUPTP",
      discount: "5% OFF",
      valid: "May 31, 2026",
      terms: 'By entering the designated discount code on the payment page, you can enjoy an immediate 5% discount. Max cap at 25 USD. Limited quantity.',
      link: "YOUR_KLOOK_AFFILIATE_LINK"
    }
  ];

  return (
    <>
      {/* Left Sidebar: Multiple Promo Codes */}
      <div className="fixed top-20 left-5 z-50 hidden lg:flex flex-col gap-4">
        {promoCodes.map((promo, idx) => (
          <div key={idx} className="w-72 bg-white shadow-lg rounded-xl p-4">
            <h3 className="text-lg font-semibold mb-2">🎟️ {promo.title}</h3>
            <p className="text-sm text-gray-600 mb-2">Discount: <strong>{promo.discount}</strong></p>
            <div className="bg-gray-100 py-2 px-3 rounded text-center font-bold mb-2">
              Code: {promo.code}
            </div>
            <p className="text-xs text-gray-500 mb-2">Valid until: {promo.valid}</p>
            <p className="text-xs text-gray-400 mb-3">{promo.terms}</p>
            <a
              href={promo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-semibold"
            >
              Book Now
            </a>
          </div>
        ))}
      </div>

      {/* Right Sidebar: Klook Affiliate Widget */}
      <div className="fixed top-20 right-5 z-50 hidden lg:block w-[180px]">
        <ins
          className="klk-aff-widget"
          data-wid="117361"
          data-adid="1247403"
          data-actids="6299,11023,9108"
          data-prod="mul_act"
          data-price="false"
          data-lang="en-BS"
          data-width="160"
          data-height="600"
          data-currency="INR"
        >
          <a href="//www.klook.com/">Klook.com</a>
        </ins>
      </div>
    </>
  );
}