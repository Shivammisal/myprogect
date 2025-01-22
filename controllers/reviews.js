const Listing = require("../models/listing");
const Review = require("../models/review");

// Create Review
module.exports.createReview = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  const review = new Review(req.body.review);
  review.author = req.user._id; // Ensure `req.user` is populated by Passport.js
  listing.reviews.push(review);
  await review.save();
  await listing.save();
  req.flash("success", "Successfully added a new review!");
  res.redirect(`/listings/${id}`);
};

// Delete Review
module.exports.destroyReview = async (req, res) => {
  const { id, reviewId } = req.params;
  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } }); // Remove review from listing
  await Review.findByIdAndDelete(reviewId); // Delete the review itself
  req.flash("success", "Review deleted successfully!");
  res.redirect(`/listings/${id}`);
};

