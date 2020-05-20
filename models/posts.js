const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// S7: Add schema for the post
const postSchema = new Schema({
  title: { type: String, required: true },
  post: { type: String, required: true },
  authorname: { type: String, required: true },
});

// S8: this will be exported to be used for the routes
const Posts = mongoose.model("Posts", postSchema);

// S9: here we're exporting and continue onto the routes
module.exports = Posts;
