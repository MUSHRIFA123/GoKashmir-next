// "use client";

// import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";
// import Link from "next/link";
// import RelatedCards from "@/components/RelatedCards";
// import { FaHeart } from "react-icons/fa";
// import { useEffect, useState } from "react";

// export default function ShoppingsPage() {
//   const galleryItems = [
//     { title: "Lal Chowk", img: "/img/shoppings/lal-chowk.jpg", href: "/place/shoppings/lal-chowk" },
//     { title: "Zaina Kadal Road", img: "/img/shoppings/zaina-kadal-road.jpg", href: "/place/shoppings/zaina-kadal-road" },
//     { title: "Kashmir Government Arts Emporium", img: "/img/shoppings/arts-emporium.jpg", href: "/place/shoppings/kashmir-government-arts-emporium" },
//     { title: "Floating Vegetable Market", img: "/img/shoppings/floating-vegetable-market.jpg", href: "/place/shoppings/floating-vegetable-market-srinagar" },
//     { title: "Polo View Road", img: "/img/shoppings/polo-view-road.jpg", href: "/place/shoppings/polo-view-road" },
//     { title: "Residency Road", img: "/img/shoppings/residency-road-srinagar.jpg", href: "/place/shoppings/residency-road-srinagar" },
//     { title: "Hazara Arts", img: "/img/shoppings/hazara-arts-srinagar.jpg", href: "/place/shoppings/hazara-arts-srinagar" },
//     { title: "Baba Art & Crafts", img: "/img/shoppings/baba-art-and-crafts.jpg", href: "/place/shoppings/baba-art-and-crafts" }
//   ];

//   const [favorites, setFavorites] = useState([]);

//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("bucketList")) || [];
//     setFavorites(saved);
//   }, []);

//   const toggleFavorite = (item) => {
//     const updated = favorites.some(f => f.title === item.title)
//       ? favorites.filter(f => f.title !== item.title)
//       : [...favorites, item];

//     setFavorites(updated);
//     localStorage.setItem("bucketList", JSON.stringify(updated));
//   };

//   const isFavorite = (title) =>
//     favorites.some(f => f.title === title);

//   return (
//     <>
//       <Navbar />

//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-6">

//           <div className="text-center mb-16">
//             <span className="text-xl text-green-800 font-semibold">SHOPPING</span>
//             <h1 className="text-4xl md:text-5xl font-bold text-green-900 mt-4">
//               Shop the Best of Kashmir
//             </h1>
//             <p className="max-w-2xl mx-auto text-gray-600 mt-6 text-lg">
//               Explore Kashmir’s vibrant markets and boutiques offering exquisite handicrafts and souvenirs.
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//             {galleryItems.map(item => (
//               <div key={item.title} className="relative group rounded-lg overflow-hidden aspect-square">

//                 <button
//                   onClick={(e) => {
//                     e.preventDefault();
//                     toggleFavorite(item);
//                   }}
//                   className={`absolute top-3 right-3 z-10 p-2 rounded-full ${
//                     isFavorite(item.title) ? "bg-white" : "bg-black/50"
//                   }`}
//                 >
//                   <FaHeart className={isFavorite(item.title) ? "text-red-500" : "text-gray-300"} />
//                 </button>

//                 <Link href={item.href} className="block w-full h-full">
//                   <img
//                     src={item.img}
//                     alt={item.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition"
//                   />
//                   <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-end p-4">
//                     <h3 className="text-white font-bold text-lg">{item.title}</h3>
//                   </div>
//                 </Link>

//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-16">
//             <RelatedCards />
//           </div>

//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }
import Link from "next/link";

async function getPlaces() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/places/category/shopping`,
    { cache: "no-store" }
  );

  return res.json();
}

export default async function ShoppingPage() {
  const places = await getPlaces();

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-6">Shopping Places</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {places.map((place) => (
          <Link
            key={place._id}
            href={`/places/${place.slug}`}
            className="border rounded-lg p-4 hover:shadow"
          >
            <h2 className="text-lg font-semibold">{place.title}</h2>
            <p className="text-sm text-gray-600 mt-2">
              {place.description_seo}
            </p>
            <p className="text-sm mt-2">
              ⭐ {place.average_rating} ({place.reviews})
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
