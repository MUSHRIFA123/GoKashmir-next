import mongoose from "mongoose";

const FaqSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
});

const PlaceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  category: { type: String },
  images: { type: [String], default: [] },
  description: { type: String },
  travel_information: { type: String },
  features: { type: [String], default: [] },
  average_rating: { type: Number, default: 0 },
  reviews: { type: Number, default: 0 },
  faqs: { type: [FaqSchema], default: [] },
});

export default mongoose.models.Place || mongoose.model("Place", PlaceSchema);
