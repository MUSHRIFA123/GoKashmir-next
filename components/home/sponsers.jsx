import Link from 'next/link'

export default function Sponsers() {
  return (
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Logo grid</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n    body {\n      font-family: 'Inter', sans-serif;\n    }\n\n    .logo-img {\n      filter: grayscale(100%) brightness(70%);\n      transition: all 0.3s ease;\n    }\n\n    .logo-card:hover .logo-img {\n      filter: grayscale(0%) brightness(100%);\n      transform: scale(1.05);\n    }\n  "
    }}
  />
  {/* Logo Grid Section */}
  <section className="py-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-gray-500 text-sm mb-2 font-medium uppercase tracking-wider">
        Trusted Kashmir Travel Experts
      </p>

      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Our Travel Partners
      </h2>

      <p className="text-gray-600 max-w-2xl mx-auto">
        We partner with experienced tour operators and local experts who specialize in
        Kashmir travel, offering safe, authentic, and well-planned journeys across the
        valley in every season.
      </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-[-8]">
  {/* MakeMyTrip */}
  <div className="flex flex-col items-center">
    <a
      href="https://www.makemytrip.com"
      target="_blank"
      rel="noopener noreferrer"
      className="logo-card bg-white rounded-2xl py-12 px-6 shadow-sm flex items-center justify-center"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/61/Makemytrip_logo.svg"
        alt="MakeMyTrip Logo"
        className="h-9 w-13"
      />
    </a>
    <p className="text-xs text-gray-500 text-center">
    Logo:{" "}
      <a
        href="https://commons.wikimedia.org/wiki/File:Makemytrip_logo.svg"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-blue-600"
      >
        Wikimedia Commons
      </a>{" "}
    </p>
  </div>

  {/* Yatra */}
  <div className="flex flex-col items-center">
    <a
      href="https://www.yatra.com"
      target="_blank"
      rel="noopener noreferrer"
      className="logo-card bg-white rounded-2xl py-12 px-6 shadow-sm flex items-center justify-center"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Yatra_logo.svg"
        alt="Yatra Logo"
        className="h-9 w-13"
      />
    </a>
    <p className="text-xs text-gray-500 text-center">
      Logo:{" "}
      <a
        href="https://commons.wikimedia.org/wiki/File:Yatra_logo.svg"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-blue-600"
      >
        Wikimedia Commons
      </a>
    </p>
  </div>

  {/* eKashmir Tourism */}
<div className="flex flex-col items-center">
  <a
    href="https://www.ekashmirtourism.com"
    target="_blank"
    rel="noopener noreferrer"
    className="logo-card bg-white rounded-2xl py-12 px-6 shadow-sm flex items-center justify-center"
  >
    <img
      src="/img/logo/ekashmir-tourism-logo.svg" 
      alt="eKashmir Tourism Logo"
      className="h-9 w-13"
    />
  </a>
  <p className="text-xs text-gray-500 text-center">
    Logo: <a href="https://www.ekashmirtourism.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">eKashmir Tourism</a>
  </p>
</div>

  {/* Etripto.in / Kashmir Tour Package */}
  <div className="flex flex-col items-center">
   <a
    href="https://www.tourradar.com"
    target="_blank"
    rel="noopener noreferrer"
    className="logo-card bg-white rounded-2xl py-12 px-6 shadow-sm flex items-center justify-center"
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/4/4b/TourRadar_logo.png" 
      alt="TourRadar Logo"
      className="h-9 w-13"
    />
  </a>
  <p className="text-xs text-gray-500 text-center">
    Logo: <a href="https://commons.wikimedia.org/wiki/File:TourRadar_logo.png" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">Wikimedia Commons</a>
  </p>
  </div>
</div>
    </div>
  </section>
    </>
  )
}
