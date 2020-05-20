const express = require("express");
// S10: this will help us route in our application
const router = express.Router();
// S11: import the schema from the models folder
const Posts = require("../models/posts");

// this will be our first route
// S12: GET request to get ALL of the posts to DISPLAY
router.get("/", (req, res) => {
  // we're going to find the post from the schema then create the promise to return our posts in JSON format
  Posts.find()
    .then((post) => res.json(post))
    .catch((err) => res.status(400).res.json(`Error: ${err}`));
});
// S13: go to MongoDB -> Collections -> Add My Own Data

// S15: POST request to ADD a new post
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

// S16: Request to GET/FIND post by ID
router.get("/:id", (req, res) => {
  // we're finding by ID through request, parameters and ID
  Posts.findById(req.params.id)
    // creating the promise to return a response and return the post in JSON format
    .then((post) => res.json(post))
    // standard error catch
    .catch((err) => res.status(400).res.json(`Error: ${err}`));
});

// S17: Request to UPDATE post by ID
router.put("/update/:id", (req, res) => {
  // it's going to be the same process as finding by ID above at first
  Posts.findById(req.params.id)
    .then((post) => {
      // here is where all of the updates happen
      (post.title = req.body.title),
        (post.post = req.body.post),
        (post.authorname = req.body.authorname);
      // this is to save the new post
      post
        .save()
        .then(() => res.json("The post has been updated successfully."));
    })
    .catch((err) => res.status(400).res.json(`Error: ${err}`));
});

//S18: Request to FIND post by ID and DELETE
router.delete("/:id", (req, res) => {
  // need I state the obvious on what's going on here?
  Posts.findByIdAndDelete(req.params.id)
    .then(() => res.json("The post has been deleted successfully"))
    .catch((err) => res.status(400).res.json(`Error: ${err}`));
});

// S14 don't forget to export the router
module.exports = router;
