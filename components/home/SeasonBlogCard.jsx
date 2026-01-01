import SeasonGuide from '@/data/json/SeasonGuide';

export default function PaintingGuideCards() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Painting Collections & Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {SeasonGuide.map((guide, index) => (
            <div key={index} className="group cursor-pointer">
              <a href={`/guides/${guide.slug}`} className="block">
                <div className="aspect-w-16 aspect-h-9 mb-4 rounded-lg overflow-hidden">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-rose-600 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-sm text-gray-500">{guide.excerpt}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
