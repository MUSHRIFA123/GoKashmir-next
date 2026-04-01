// import { MongoClient } from 'mongodb';
// import Footer from '@/components/Footer';
// import Navbar from '@/components/Navbar';

// async function getHotels() {
//   const client = await MongoClient.connect(process.env.MONGODB_URI);
//   const db = client.db(process.env.MONGODB_DB);
//   const hotelsCollection = db.collection('hotels');
//   const hotels = await hotelsCollection.find({}).toArray();
//   client.close();
//   return hotels.map(hotel => ({
//     ...hotel,
//     _id: hotel._id.toString()
//   }));
// }

// export default async function HotelsPage() {
//   const hotels = await getHotels();

//   return (
//     <>
//       <Navbar />
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold mb-6">Hotel Deals</h1>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {hotels.map(hotel => (
//             <div key={hotel._id} className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition relative">

//               {/* Sale Banner */}
//               {hotel.category && (
//                 <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded z-10">
//                   {hotel.category}
//                 </div>
//               )}

//               {/* Hotel Image */}
//               {hotel.image && (
//                 <div className="relative">
//                   <img
//                     src={hotel.image}
//                     alt={hotel.name}
//                     className="w-full h-48 object-cover"
//                   />
//                   <span className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
//                     Image source: Klook
//                   </span>
//                 </div>
//               )}

//               {/* Hotel Details */}
//               <div className="p-4">
//                 <h2 className="text-xl font-semibold">{hotel.name}</h2>
//                 <p className="text-sm text-gray-500">
//                   {hotel.place} · {hotel.stars} stars
//                 </p>
//                 <p className="mt-2 text-yellow-600">Rating: {hotel.rating}</p>
//                 <p className="mt-2 text-gray-700">
//                   From {hotel.currency} {hotel.discounted_price}{" "}
//                   {hotel.price && (
//                     <span className="line-through text-gray-400">{hotel.currency} {hotel.price}</span>
//                   )}
//                 </p>
//                 <a 
//                   href={hotel.affiliate_link} 
//                   target="_blank" 
//                   rel="noopener noreferrer" 
//                   className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
//                 >
//                   Book Now
//                 </a>
//               </div>

//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }
import { MongoClient } from 'mongodb';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import HotelsList from './HotelsList'; // client component

async function getHotels() {
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db(process.env.MONGODB_DB);
  const hotelsCollection = db.collection('hotels');
  const hotels = await hotelsCollection.find({}).toArray();
  client.close();
  return hotels.map(hotel => ({
    ...hotel,
    _id: hotel._id.toString()
  }));
}

export default async function HotelsPage() {
  const hotels = await getHotels();

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Hotel Deals</h1>
        <HotelsList hotels={hotels} />
      </div>
      <Footer />
    </>
  );
}