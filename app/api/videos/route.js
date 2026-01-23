import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; // your MongoDB connection string
const dbName = process.env.MONGODB_DB; // your DB name

export async function GET() {
  let client;

  try {
    client = new MongoClient(uri);
    await client.connect();
    const db = client.db(dbName);
    const videos = await db.collection("videos").find({}).toArray();

    return new Response(JSON.stringify(videos), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to fetch videos" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  } finally {
    await client?.close();
  }
}
