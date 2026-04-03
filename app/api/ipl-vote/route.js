"use server";

import { connectDB } from "@/lib/mongodb"; // <-- use named import
import { NextResponse } from "next/server";
import mongoose from "mongoose";

// Define Mongoose schema & model
const voteSchema = new mongoose.Schema({
  match: { type: String, unique: true },
  votes: {
    csk: { type: Number, default: 0 },
    punjab: { type: Number, default: 0 },
  },
  likes: {
    csk: { type: Number, default: 0 },
    punjab: { type: Number, default: 0 },
  },
});

const Vote = mongoose.models.Vote || mongoose.model("Vote", voteSchema);

export async function POST(req) {
  try {
    await connectDB();
    const { type, team } = await req.json();

    let doc = await Vote.findOne({ match: "csk-punjab-2026" });
    if (!doc) {
      doc = await Vote.create({
        match: "csk-punjab-2026",
        votes: { csk: 0, punjab: 0 },
        likes: { csk: 0, punjab: 0 },
      });
    }

    if (type === "vote") {
      doc.votes[team] = (doc.votes[team] || 0) + 1;
    } else if (type === "like") {
      doc.likes[team] = (doc.likes[team] || 0) + 1;
    }

    await doc.save();
    return NextResponse.json({ votes: doc.votes, likes: doc.likes });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    let doc = await Vote.findOne({ match: "csk-punjab-2026" });

    if (!doc) {
      doc = await Vote.create({
        match: "csk-punjab-2026",
        votes: { csk: 0, punjab: 0 },
        likes: { csk: 0, punjab: 0 },
      });
    }

    return NextResponse.json({ votes: doc.votes, likes: doc.likes });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}