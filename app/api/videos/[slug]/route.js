// import { MongoClient } from "mongodb";

// const uri = process.env.MONGODB_URI;
// const dbName = process.env.MONGODB_DB;

// export async function GET(req, { params }) {
//   const { slug } = params;  // ✅ FIXED: No await
  
//   let client;

//   if (!uri || !dbName) {
//     return new Response(JSON.stringify({ error: "Database configuration missing" }), { status: 500 });
//   }

//   try {
//     client = new MongoClient(uri);
//     await client.connect();
//     const db = client.db(dbName);

//     const video = await db.collection("videos").findOne({ slug });

//     if (!video) {
//       return new Response(JSON.stringify({ error: "Video not found" }), { status: 404 });
//     }

//     return new Response(JSON.stringify(video), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (err) {
//     console.error("MongoDB Error:", err);
//     return new Response(JSON.stringify({ error: err.message }), { status: 500 });
//   } finally {
//     await client?.close();
//   }
// }
