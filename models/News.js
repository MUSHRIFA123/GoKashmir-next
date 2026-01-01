import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const NewsSchema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  category: String,
  headline: String,
  subheadline: String,
  content: String,
  excerpt: String,
  tags: [String],
  keyPoints: [String],
  publishedAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  featuredImage: {
    url: String,    // path or full URL
    alt: String,
    caption: String,
    source: String
  },
});

const News = models.News || model("News", NewsSchema);

export default News;
