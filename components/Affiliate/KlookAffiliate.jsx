"use client";

import { useEffect } from "react";

export default function KlookSidebar() {
  useEffect(() => {
    // Load Klook affiliate script
    const script = document.createElement("script");
    script.src = "https://affiliate.klook.com/widget/fetch-iframe-init.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // cleanup
    };
  }, []);

  return (
    <div className="fixed top-20 right-0 z-50 hidden lg:block w-[180px]">
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
  );
}