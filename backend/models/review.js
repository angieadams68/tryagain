const { Schema } = require("mongoose");



const Review = new Schema(
  {
    name: { type: String, required: true },
    review: { type: String, required: true },
 
  },
  { timestamps: true }
);
module.exports = Review;