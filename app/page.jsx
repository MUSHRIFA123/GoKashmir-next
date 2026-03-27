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
      {/* ✅ Monetag Direct Link as a visible CTA button */}
      <div style={{ display: "flex", justifyContent: "center", margin: "30px 0" }}>
        <a
          href="https://omg10.com/4/10792284" // <-- replace with your real Monetag link
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "14px 25px",
            backgroundColor: "#ff6600",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "16px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            transition: "transform 0.2s",
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
          🌍 Explore Kashmir Tour Packages
        </a>
      </div>
      <HomepageVideos videos={videos} />
      <Sponsers/>
      <Footer/>
    </>
  )
}
