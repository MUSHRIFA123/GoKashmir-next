import Footer from '@/components/Footer'
import HomeHero from '@/components/home/HomeHero'
import HomepageEvents from '@/components/home/HomepageEvents'
import Sponsers from '@/components/home/sponsers'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
    <Navbar/>
      <HomeHero/>
      <HomepageEvents/>
      <Sponsers/>
      <Footer/>
    </>
  )
}
