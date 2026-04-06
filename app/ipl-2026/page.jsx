import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FanChallenge from "./FanChallenge";

export const metadata = {
  title: "IPL Today: KKR vs Punjab – Match Guide & Tips | GoKashmir",
  description:
    "Get complete guide for today's IPL match between Kolkata Knight Riders and Punjab Kings. Check venue, timings, team info, and live updates."
};

export default function IPLTodayKKRvPunjab() {
  // Dynamic Match Details
  const matchDetails = {
    date: new Date().toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    time: "7:30 PM IST",
    venue: "Eden Gardens, Kolkata", // you can change or make API-based later
  };

  return (
    <>
      <Navbar />

      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative h-[420px] flex items-center justify-center text-center">
          <img
            src="/img/ipl/kkr-punjab.png"
            alt="KKR vs Punjab"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 px-6 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              KKR vs Punjab
            </h1>
            <p className="text-white text-lg md:text-xl">
              Today’s IPL match details, venue, timings, teams, and live score guide.
            </p>
          </div>
        </section>

        {/* Match Details */}
        <section className="py-14">
          <div className="max-w-4xl mx-auto px-6 bg-gray-50 rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-emerald-600 mb-6">
              Match Details
            </h2>

            <div className="flex justify-around items-center gap-10 mb-6">
              {/* KKR */}
              <div className="flex flex-col items-center">
                <img
                  src="/img/ipl/kkr.png"
                  alt="Kolkata Knight Riders"
                  className="h-24 w-24 object-cover mb-2"
                />
                <p className="font-semibold">
                  Kolkata Knight Riders
                </p>
              </div>

              <span className="text-2xl font-bold text-gray-700">VS</span>

              {/* Punjab */}
              <div className="flex flex-col items-center">
                <img
                  src="/img/ipl/punjab.png"
                  alt="Punjab Kings"
                  className="h-24 w-24 object-cover mb-2"
                />
                <p className="font-semibold">
                  Punjab Kings
                </p>
              </div>
            </div>

            <p className="text-gray-700 text-lg mb-2">
              Date: {matchDetails.date}
            </p>
            <p className="text-gray-700 text-lg mb-2">
              Time: {matchDetails.time}
            </p>
            <p className="text-gray-700 text-lg">
              Venue: {matchDetails.venue}
            </p>
          </div>
        </section>

        {/* Fan Challenge */}
        <FanChallenge />

        {/* Venue & Travel Tips */}
        <section className="py-14 max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-emerald-600 mb-8 text-center">
            Venue & Travel Tips
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">
                Venue Info
              </h3>
              <p className="text-gray-700 mb-2">
                Eden Gardens, Kolkata – one of the most iconic cricket stadiums in India with massive seating capacity and electrifying atmosphere.
              </p>
              <p className="text-gray-700">
                Book tickets early and reach before time to avoid last-minute rush.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">
                Tips for Fans
              </h3>
              <ul className="text-gray-700 list-disc list-inside space-y-2">
                <li>Carry light snacks and water bottles.</li>
                <li>Use public transport or cabs.</li>
                <li>Follow stadium security rules.</li>
                <li>Wear team jersey & enjoy the vibe!</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Live Score */}
        <section className="bg-emerald-700 py-14 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Follow Live Scores
          </h2>
          <p className="max-w-2xl mx-auto mb-6">
            Get ball-by-ball updates, live scores, and match highlights.
          </p>

          <a
            href="https://www.iplt20.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-emerald-700 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition"
          >
            Check Live Scores
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}