import Footer from '@/components/Footer'
import HomeHero from '@/components/home/HomeHero'
import Sponsers from '@/components/home/sponsers'
import Navbar from '@/components/Navbar'
import HomepageVideos from '@/components/video/HomepageVideos'
import KlookAffiliate from '@/components/Affiliate/KlookAffiliate'
import { getVideos } from '@/app/videos/page' // <-- import from video page

export default async function Home() {
  const videos = await getVideos(); // fetch same videos as /videos page

  return (
    <>
      <Navbar/>
      <HomeHero/>
            <KlookAffiliate />
      <HomepageVideos videos={videos} />
      <Sponsers/>
      <Footer/>
    </>
  )
}
