"use client";

import { useEffect } from "react";

export default function AdsterraNative() {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.src =
      "https://pl28744207.effectivegatecpm.com/53599c170c02b856095533814f017bda/invoke.js";

    const container = document.getElementById(
      "container-53599c170c02b856095533814f017bda"
    );

    if (container && !container.hasChildNodes()) {
      container.appendChild(script);
    }
  }, []);

  return (
    <div
      id="container-53599c170c02b856095533814f017bda"
      style={{ width: "100%", minHeight: "120px" }}
    />
  );
}
