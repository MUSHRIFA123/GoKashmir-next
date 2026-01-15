import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Places from "@/models/Places";

export async function GET(req, { params }) {
  const { categorySlug, placeSlug } = await  params;

  await connectDB();

  const place = await Places.findOne({
    category_slug: categorySlug,
    slug: placeSlug,
  });

  if (!place) {
    return NextResponse.json(
      { message: "Place not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(place);
}
