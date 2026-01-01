import mongoose from "mongoose";

const EventsSchema = new mongoose.Schema({
  title: String,
  slug: String,
  location: String,
  state: String,
  start_date: Date,
  end_date: Date,
  category: String,
  short_description: String,
  long_description: String,
  highlights: [String],
  images: [String],
  tags: [String],
  status: String,
  duration_days: Number,
  year: Number,
});

export default mongoose.models.Events || mongoose.model("Events", EventsSchema);
