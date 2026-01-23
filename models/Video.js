// models/Video.js
import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema({
  name: String,
  slug: String,
  description: String,
  website: String,
  location: String,
});

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  title: String,
});

const FeaturedImageSchema = new mongoose.Schema({
  url: String,
  source: String,
  alt: String,
  caption: String,
});

const TechnicalSpecsSchema = new mongoose.Schema({
  duration: Number,
  location: String,
});

const VideoSchema = new mongoose.Schema({
  title: String,
  slug: { type: String, unique: true },
  video_id: String,
  headline: String,
  subheadline: String,
  category: String,
  content: String,
  videoType: String,
  company: [CompanySchema],
  contact: ContactSchema,
  dateLocation: String,
  source: String,
  distributor: String,
  status: String,
  publishedAt: Date,
  updatedAt: Date,
  tags: [String],
  categories: [String],
  keywords: [String],
  featuredImage: FeaturedImageSchema,
  videoUrl: String,
  duration: Number,
  transcript: String,
  keyPoints: [String],
  products: [String],
  relatedStores: [String],
  active: Boolean,
  featured: Boolean,
  priority: String,
  industry: String,
  application: String,
  technicalSpecs: TechnicalSpecsSchema,
});

export default mongoose.models.Video || mongoose.model("Video", VideoSchema);
