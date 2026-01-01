
import HeadCommon from '@/components/HeadCommon'
import BodyCommon from '@/components/BodyCommon'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import PageHeaderCategory from '@/components/PageHeaderCategory'
import Breadcrumbs from '@/components/Breadcrumbs'
import CardwithFloatingText from '@/components/CardwithFloatingText'

import PlaceHeader from '@/components/place/PlaceHeader'
import PlaceMainLeft from '@/components/place/PlaceMainLeft'
import PlaceSidebar from '@/components/place/PlaceSidebar'
import PrefooterTravelInfo from '@/components/PrefooterTravelInfo'
import PlaceTwoColLayout from '@/components/place/PlaceTwoColLayout'


import generateSlug from '@/utils/slugify'

export default function PlaceSample() {

  


  return (
    <>
      <head>
        <title>Itenerary Single Page</title>
        <HeadCommon/>
      </head>
      <body>
        <Navbar/>
        <h1>Itenerary Single</h1>
        
        <Footer/>
        <BodyCommon/>
      </body>
    </>
  );
}
