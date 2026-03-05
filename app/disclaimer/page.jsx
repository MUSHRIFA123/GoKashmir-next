// File: app/(fixed)/disclaimer/page.jsx
"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DisclaimerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Disclaimer</h1>

        <p className="mb-4">
          The content on this website is intended for general travel guidance and informational purposes only. 
          While we strive to provide accurate and up-to-date information about destinations, accommodations, 
          attractions, and travel tips, we cannot guarantee the accuracy, completeness, or reliability of the content.
        </p>

        <p className="mb-4">
          Travel plans and decisions you make based on information from this website are at your own risk. 
          We are not responsible for any losses, damages, accidents, delays, or inconveniences that may occur 
          during your travels. Always verify local conditions, regulations, and official sources before making 
          any travel arrangements.
        </p>

        <p className="mb-4">
          This website may contain links to third-party sites for additional travel resources. We are not responsible 
          for the content, policies, or practices of those sites, and the inclusion of any links does not imply 
          endorsement.
        </p>

        <p>
          By using this website, you agree that all travel decisions are your own and that we disclaim liability 
          for any outcomes resulting from the use of our information.
        </p>
      </main>

      <Footer />
    </div>
  );
}