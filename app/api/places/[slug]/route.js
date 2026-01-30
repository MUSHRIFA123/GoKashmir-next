// import { connectDB } from "@/lib/mongodb";
// import Place from "@/models/Place";

// export async function GET(req, { params }) {
//   try {
//     await connectDB();
//     const place = await Place.findOne({ slug: params.slug }).lean();

//     if (!place) {
//       return new Response(JSON.stringify({ error: "Place not found" }), { status: 404 });
//     }

//     return new Response(JSON.stringify(place), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     return new Response(JSON.stringify({ error: error.message }), { status: 500 });
//   }
// }

import { connectDB } from "@/lib/mongodb";
import Place from "@/models/Place";

export async function GET(req, { params }) {
  try {
    await connectDB();
    
    // ✅ FIX: Await params before accessing properties
    const { slug } = await params;
    
    const place = await Place.findOne({ slug }).lean();

    if (!place) {
      return new Response(JSON.stringify({ error: "Place not found" }), { 
        status: 404,
        headers: { "Content-Type": "application/json" }
      });
    }

    return new Response(JSON.stringify(place), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error('Error fetching place:', error);
    return new Response(JSON.stringify({ error: error.message }), { 
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

