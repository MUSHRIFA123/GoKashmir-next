'use client';
import Script from 'next/script';

export default function OMG10Ad() {
  return (
    <div style={{ width: '100%', textAlign: 'center', margin: '20px 0' }}>
      {/* Load OMG10 ad script */}
      <Script
        src="https://omg10.com/4/10792090"
        strategy="afterInteractive"
      />
    </div>
  );
}