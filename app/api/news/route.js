import { connectDB } from "@/lib/mongodb";
import News from "@/models/News";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  const news = await News.find().sort({ date: -1 }).lean(); // sort by latest first
  return NextResponse.json(news);
}
