import { connectDB } from "@/lib/mongodb";
import Place from "@/models/Place";

export async function GET() {
  try {
    await connectDB();
    const places = await Place.find({}).lean();
    return new Response(JSON.stringify(places), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
