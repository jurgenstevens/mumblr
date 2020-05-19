const express = require("express");
// S10: this will help us route in our application
const router = express.Router();
// S11: import the schema from the models folder
const Posts = require("../models/posts");

// this will be our first route to GET all of the posts to DISPLAY
router.get("/", (req, res) => {
  // we're going to find the post from the schema then create the promise to return our posts in JSON format
  Post.find()
    .then((article) => res.json(article))
    // then we'll catch the error with status 400
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// S12: go to MongoDB -> Collections -> Add My Own Data
