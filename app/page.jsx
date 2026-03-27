import Footer from '@/components/Footer'
import HomeHero from '@/components/home/HomeHero'
import Sponsers from '@/components/home/sponsers'
import Navbar from '@/components/Navbar'
import HomepageVideos from '@/components/video/HomepageVideos'
import { getVideos } from '@/app/videos/page' // <-- import from video page

export default async function Home() {
  const videos = await getVideos(); // fetch same videos as /videos page

  return (
    <>
      <Navbar/>
      <HomeHero/>
      <a href="YOUR_MONETAG_DIRECT_LINK" target="_blank">
  🌍 Explore Kashmir Tour Packages
</a>
      <HomepageVideos videos={videos} />
      <Sponsers/>
      <Footer/>
    </>
  )
}
