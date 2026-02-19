import Footer from '@/components/Footer'
import HomeHero from '@/components/home/HomeHero'
import Sponsers from '@/components/home/sponsers'
import Navbar from '@/components/Navbar'
import HomepageVideos from '@/components/video/HomepageVideos'
import Adsterra300x250 from "@/components/Adsterra300x250";
import { getVideos } from '@/app/videos/page' // <-- import from video page

export default async function Home() {
  const videos = await getVideos(); // fetch same videos as /videos page

  return (
    <>
      <Navbar/>
      <HomeHero/>
      <HomepageVideos videos={videos} />
      <Sponsers/>
      <Footer/>
      <Adsterra300x250 />
    </>
  )
}
