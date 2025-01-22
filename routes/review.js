const express = require("express");
const router = express.Router({mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");   
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js"); // Added Listing model import

const { 
  validateReview, 
  isLoggedIn, 
  isReviweAuthor 
} = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");
const review = require("../models/review.js");


//Post Route
router.post(
  "/",
  isLoggedIn,
  validateReview, 
  wrapAsync(reviewController.createReview)
);

//Delete Review Route
router.delete(
    "/:reviewId",
    isLoggedIn,
    isReviweAuthor,
  wrapAsync(reviewController.destroyReview)
);

module.exports = router;
