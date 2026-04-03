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
      <a
  href="https://omg10.com/4/10825004"
  target="_blank"
  rel="noopener noreferrer"
  className="
    block
    w-full
    max-w-md
    mx-auto
    p-4
    bg-gradient-to-r from-blue-500 to-blue-700
    text-white
    font-bold
    text-center
    rounded-lg
    shadow-lg
    hover:from-blue-600 hover:to-blue-800
    transition
    duration-300
  "
>
  🔥 Check This Deal on OMG10! 🔥
</a>
      <Sponsers/>

      <Footer/>
    </>
  )
}
