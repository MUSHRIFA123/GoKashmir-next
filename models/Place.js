import mongoose from "mongoose";

// FAQ Schema
const FAQSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
});

// Image Schema
const ImageSchema = new mongoose.Schema({
  url: { type: String, required: true },
  alt: { type: String, default: "" }, // optional alt text
});

// Place Schema
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
  image: ImageSchema, // store as object with url + alt
  faqs: [FAQSchema],
}, { timestamps: true });

export default mongoose.models.Place || mongoose.model("Place", PlaceSchema);
