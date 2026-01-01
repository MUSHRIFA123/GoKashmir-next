import Link from "next/link";

export default function PlaceCard({ place }) {
  return (
    <Link href={`/place/${place.category_slug}/${place.slug}`}>

      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition cursor-pointer">
        
        <img
          src={place.image}
          alt={place.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />

        <div className="p-4">
          <h3 className="text-lg font-semibold">
            {place.title}
          </h3>

          <p className="text-gray-600 text-sm">
            {place.area}
          </p>

          <p className="text-yellow-500 mt-1">
            ⭐ {place.average_rating}
          </p>
        </div>

      </div>
    </Link>
  );
}
