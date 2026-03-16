import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema({
  title: String,
  slug: String,
  image: String,
  category: String,
  content: String,
  metaDescription: String,
});

// Check if the model already exists (important in Next.js hot reload)
const Article = mongoose.models.Article || mongoose.model("Article", ArticleSchema);

export { Article }; // ✅ named export