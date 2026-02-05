// "use client";
// import React, { useEffect, useState } from "react";

// const HomepageEvents = () => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     fetch("/api/events")
//       .then((res) => res.json())
//       .then((data) => setEvents(data));
//   }, []);

//   return (
//     <>{/* Your dynamic grid goes here */}</>
//   );
// };

// export default HomepageEvents;
import { connectDB } from "@/lib/mongodb";
import Events from "@/models/Events";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();

  const today = new Date();
  today.setHours(0, 0, 0, 0);   // important

  // ✅ Upcoming (future events)
  const upcoming = await Events.find({
    start_date: { $gte: today }
  })
    .sort({ start_date: 1 }) // nearest first
    .lean();

  // ✅ Latest (already happened events)
  const latest = await Events.find({
    start_date: { $lt: today }
  })
    .sort({ start_date: -1 }) // most recent past event first
    .lean();

  return NextResponse.json({
    upcoming,
    latest
  });
}
