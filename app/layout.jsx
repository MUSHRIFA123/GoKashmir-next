// app/layout.js
import './globals.css'
import Head from 'next/head'

export const metadata = {
  title: 'Go Kashmir',
  description: 'Your travel guide for Kashmir',
  icons: {
    icon: '/favicon.ico', // path to your uploaded favicon
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console verification */}
        <meta name="google-site-verification" content="KbHGYyqwSZqkddVP5SKR1TO5DgHhvHM1dCk0A2q0WBc" />
      </head>
      <body>{children}</body>
    </html>
  )
}
