import { MongoClient, ObjectId } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

export async function GET(req, { params }) {
  const { slug } = params;  // Fix: Await params before destructuring
  let client;

  try {
    client = new MongoClient(uri);
    await client.connect();
    const db = client.db(dbName);

    const video = await db.collection("videos").findOne({ slug });

    if (!video) {
      return new Response(JSON.stringify({ error: "Video not found" }), { status: 404 });
    }

    return new Response(JSON.stringify(video), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  } finally {
    await client?.close();
  }
}
