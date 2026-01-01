import Link from 'next/link'
import HeadCommon from '@/components/HeadCommon'
import BodyCommon from '@/components/BodyCommon'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import PageHeaderCategory from '@/components/PageHeaderCategory'
import Breadcrumbs from '@/components/Breadcrumbs'
import CardwithFloatingText from '@/components/CardwithFloatingText'

import PlaceHeader from '@/components/PlaceHeader'
import PlaceMainLeft from '@/components/PlaceMainLeft'
import PlaceSidebar from '@/components/PlaceSidebar'
import PrefooterTravelInfo from '@/components/PrefooterTravelInfo'
import PlaceTwoColLayout from '@/components/PlaceTwoColLayout'

import generateSlug from '@/utils/slugify'





const getPlaces = async() => {
  try {
    /*const res = await fetch(`${process.env.API_URI}/api/place/${placeSlug}`, {
      cache: "no-store",
    });*/

    const res = await fetch(`${process.env.API_URI}/api/places`, {
       /*next: { revalidate: process.env.CACHE_SECONDS }*/
       cache: "no-store"
    });

    console.log("res:", res)


    if (!res.ok) {
      throw new Error("Failed to fetch places");
    }

    return res.json()

  } catch(error) {
    console.log("Error loading places: ", error)
  }
}



export default async function PlacesAllPage({params}) {

  const {places} = await getPlaces()

  const shopping_places = places.filter(place => place.category === "Shopping");
  const shopping_malls = shopping_places.filter(shopping_place => shopping_place.subcategory === "Shopping Mall");
  

  const attraction_places = places.filter(place => place.category === "Attraction");
  const amusement_parks = attraction_places.filter(attraction_place => attraction_place.subcategory === "Amusement Park");

  //const attraction_places = places.filter(place => place.category === "Attraction");

  const data = {
    title: "Food & Drink in London",
    description: "Let your stomach lead you to delicious restaurants in London or enjoy cocktails and drinks at pubs and top bars in London. The variety of the best places to eat and drink in London is mind blowing – sit down to Michelin-starred dining, tuck into street food or hang out at outdoor restaurants.",
    breadcrumbs: ["Home", "Things to do", "Food & Drink in London"],
    popularThingsToDo: [
      {
        title: "Afternoon tea bus with panoramic tour",
        slug: "afternoon-tea-bus-with-panoramic-tour",
        description: "Delight in indulgent afternoon tea and spot famous London landmarks."
      },
      {
        title: "Borough Market Food Tour",
        slug: "borough-market-food-tour",
        description: "Discover the best worldwide cuisine on a tasty guided food tour."
      },
      {
        title: "Thames dinner cruises",
        slug: "thames-dinner-cruises",
        description: "Admire London landmarks from the water and savour delicious dishes.",
      },
      {
        title: "Buckingham Palace Tour and Afternoon Tea",
        slug: "buckingham-palace-tour-and-afternoon-tea",
        description: "Combine a Buckingham Palace tour with a royally indulgent afternoon tea."
      }
    ],
    foodAndDrinkInspiration: [
      {
        title: "Themed afternoon teas",
        slug: "themed-afternoon-teas",
        description: "Tuck into a fresh take on the traditional afternoon tea with special themed treats."
      },
      {
        title: "Restaurants with a view",
        slug: "restaurants-with-a-view",
        description: "Savour delicious cuisine with a side of stunning panoramic views."
      },
      {
        title: "Quirky restaurants",
        slug: "quirky-restaurants",
        description: "Unique places to dine, from Michelin-starred eateries to a prison restaurant."
      },
      {
        title: "Chinese restaurants",
        slug: "chinese-restaurants",
        description: "Find top Chinese eateries to visit, from Chinatown to Michelin-starred hangouts."
      }
    ],
    bestPicks: [
      {
        title: "Thames lunch cruises",
        slug: "thames-lunch-cruises",
        description: "Enjoy lunch on the Thames and spot London’s famous landmarks."
      },
      {
        title: "Afternoon tea cruise on the Thames",
        slug: "afternoon-tea-cruise-on-the-thames",
        description: "Cruise along the Thames with a delightful afternoon tea."
      },
      {
        title: "Bustronome",
        slug: "bustronome",
        description: "Tour the capital on a luxury glass-roofed bus and tuck into delicious British dishes."
      },
      {
        title: "London food tours",
        slug: "london-food-tours",
        description: "Indulge in the very best cuisine on guided food tours around the city."
      },
      {
        title: "Brick Lane Indian Food Tour",
        slug: "brick-lane-indian-food-tour",
        description: "Tuck into curries, snacks and authentic sweets at diverse eateries."
      },
      {
        title: "Best brunches in London",
        slug: "best-brunches-in-london",
        description: "Check out top brunch spots serving pancakes, brunch burgers and more."
      }
    ],
    categories: [
      "All Food and Drink",
      "Things to Do",
      "Afternoon Tea",
      "Pub & Bar",
      "Restaurant",
      "Café"
    ],
    afternoonTeaOptions: [
      "Best traditional afternoon tea",
      "Cheap afternoon tea",
      "Vegan afternoon tea"
    ],
    bestFoodAndDrinkOptions: [
      "Restaurants",
      "Food hubs",
      "Desserts & Treats"
    ],
    topBarsInLondon: [
      "Quirky bars",
      "Cocktail bars",
      "LGBTQ+ bars",
    ]
  }


  return (
    <>
      <head>
        <title>National Museum Bangalore - Visit Zurich</title>
        <HeadCommon/>
      </head>
      <body>
        <Navbar/>
        <Breadcrumbs/>

        <PlaceHeader title={"all places"}/>

        <section className="relative pb-14">
          <div className="max-w-7xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-12">
              <div className="col-span-12 lg:col-span-12 pb-16">
                {/*<p>JSON PLACES: {JSON.stringify(places)}</p>*/}
                {/*<p>Shopping Places {JSON.stringify(shopping_places)}</p>*/}
                {/*<p>Shopping Malls {JSON.stringify(shopping_malls)}</p>*/}

                {shopping_malls.map((shopping_malls, index) => (
                  <Link key={index} className="block" href={`/place/${shopping_malls.slug}`}>
                    {shopping_malls.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative pb-14">
          <div className="max-w-7xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-12">
              <div className="col-span-12 lg:col-span-12 pb-16">
                {/*<p>JSON PLACES: {JSON.stringify(places)}</p>*/}
                {/*<p>Shopping Places {JSON.stringify(shopping_places)}</p>*/}
                {/*<p>Shopping Malls {JSON.stringify(shopping_malls)}</p>*/}

                {amusement_parks.map((amusement_park, index) => (
                  <h1 key={index}>{amusement_park.description_seo}</h1>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/*Related Places*/}
        <CardwithFloatingText />

        <PrefooterTravelInfo/>
        
        <Footer/>
        <BodyCommon/>
      </body>
    </>
  );
}
