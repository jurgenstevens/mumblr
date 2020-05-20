const express = require("express");
// S10: this will help us route in our application
const router = express.Router();
// S11: import the schema from the models folder
const Posts = require("../models/posts");

// this will be our first route
// request to GET ALL of the posts to DISPLAY
router.get("/", (req, res) => {
  // we're going to find the post from the schema then create the promise to return our posts in JSON format
  Posts.find()
    .then((article) => res.json(article))
    .catch((err) => res.status(400).res.json(`Error: ${err}`));
});
// S12: go to MongoDB -> Collections -> Add My Own Data

// request to ADD a new post
router.post("/add", (req, res) => {
  const newPost = new Posts({
    title: req.body.title,
    post: req.body.post,
    authorname: req.body.authorname,
  });
  newPost
    .save()
    .then(() => res.json("The new post was added successfully!"))
    .catch((err) => res.status(400).res.json(`Error: ${err}`));
});

// S13 don't forget to export the router
module.exports = router;
