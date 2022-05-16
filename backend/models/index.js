const { model } = require("mongoose");
const ReviewSchema = require("./review");

const Review = model("review", ReviewSchema);


module.exports = {
  Review
};