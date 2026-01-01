import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeaderItinerary from '@/components/itinerary/PageHeaderItinerary';

export default function page() {
  return (
    <>
      <head>
        <title>Travel Guide</title>
      </head>
      <body>
        <Navbar />
        <PageHeaderItinerary
          title="Travelling to Bangalore"
          description="To ensure a smooth journey into Bangalore, learn about entry requirements, necessary documents, transportation options, and essential tips for your arrival."
          image="/img/bg/bg-city.jpg"
        />
        <TravelGuideBlogPostcards/>
        <Footer />
      </body>
    </>
  );
}
