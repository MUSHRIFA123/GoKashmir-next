"use client";

import Script from "next/script";

export default function Adsterra300x250() {
  return (
    <div style={{ width: 300, height: 250 }}>
      <Script
        id="adsterra-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            atOptions = {
              'key' : 'add9888686e50cfeb824efa1938b6d90',
              'format' : 'iframe',
              'height' : 250,
              'width' : 300,
              'params' : {}
            };
          `,
        }}
      />

      <Script
        id="adsterra-script"
        strategy="afterInteractive"
        src="https://www.highperformanceformat.com/add9888686e50cfeb824efa1938b6d90/invoke.js"
      />
    </div>
  );
}
