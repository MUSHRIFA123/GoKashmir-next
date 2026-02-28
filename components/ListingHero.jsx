export default function ListingHero({
  title,
  subtitle,
  description,
  image,
}) {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mt-4">
            {title}
          </h1>

          {subtitle && (
            <p className="text-green-700 font-semibold mt-4">
              {subtitle}
            </p>
          )}

          <p className="text-gray-600 mt-6 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="relative w-full h-[300px] md:h-[380px] rounded-xl overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}