const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  username: String,
  userImage: String,
  location: String,
  rating: Number,
  date: String,
  reviewTitle: String,
  reviewText: String,
});

const priceSchema = new mongoose.Schema({
  current: {
    value: String,
    text: String,
  },
});

const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  isInStock: Boolean,
  gender: String,
  category: String,
  availableSizes: [String],
  rating: Number,
  reviews: [reviewSchema],
  totalReviewCount: Number,
  productionDate: Date,
  price: priceSchema,
  brandName: String,
  productCode: Number,
  imageUrl: String,
  additionalImageUrls: [String],
});

module.exports = mongoose.model("Product", productSchema);
