const mongoose = require("mongoose");
const Review = require("./review");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  author: {
    type: String,
    
  },
  summ: {
    type: String,
  },
  desc: {
    type: String,
  },
  date: {
    type: Date,
    default:Date.now,
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    }
  ]
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
