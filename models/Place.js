import mongoose from "mongoose";

const FAQSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
});

const PlaceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description_seo: { type: String },
  description: { type: String, required: true },
  address_line_1: { type: String },
  address_line_2: { type: String },
  area: { type: String },
  category: { type: String },
  category_slug: { type: String },
  average_rating: { type: Number },
  reviews: { type: String },
  features: { type: String },
  travel_information: { type: String },
  locality: { type: String },
  top: { type: Boolean, default: false },
  image: { type: String },
  faqs: [FAQSchema],
});

export default mongoose.models.Place || mongoose.model("Place", PlaceSchema);
