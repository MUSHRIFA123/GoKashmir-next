"use client";
import { useEffect } from "react";

export default function Adsterra300x250() {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.innerHTML = `
      atOptions = {
        'key' : 'add9888686e50cfeb824efa1938b6d90',
        'format' : 'iframe',
        'height' : 250,
        'width' : 300,
        'params' : {}
      };
    `;

    const script2 = document.createElement("script");
    script2.src =
      "https://www.highperformanceformat.com/add9888686e50cfeb824efa1938b6d90/invoke.js";
    script2.async = true;

    const container = document.getElementById("adsterra-300");

    if (container && container.childNodes.length === 0) {
      container.appendChild(script1);
      container.appendChild(script2);
    }
  }, []);

  return <div id="adsterra-300" style={{ minHeight: 250 }} />;
}
