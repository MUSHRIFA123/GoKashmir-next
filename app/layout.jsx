import './globals.css'
import Script from "next/script";

export const metadata = {
  title: 'Go Kashmir',
  description: 'Your travel guide for Kashmir',
  icons: {
    icon: '/favicon.ico',
  },
  verification: {
    google: 'KbHGYyqwSZqkddVP5SKR1TO5DgHhvHM1dCk0A2q0WBc',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Adsense */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7496144172676724"
     crossorigin="anonymous"></script>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XHTLGGYR9Q"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XHTLGGYR9Q');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
