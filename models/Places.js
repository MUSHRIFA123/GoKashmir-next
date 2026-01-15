import mongoose from 'mongoose';

const placeSchema = new mongoose.Schema({
  title: String,
  slug: { type: String, unique: true },
  description: String,
  description_seo: String,
  address_line_1: String,
  address_line_2: String,
  area: String,
  category: String,
  average_rating: String,
  reviews: String,
  features: String,
  travel_information: String,
  locality: String,
  faqs: [{
    question: String,
    answer: String
  }]
}, { timestamps: true });

export default mongoose.models.Place || mongoose.model('Place', placeSchema);
