const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// schema for the post
const postSchema = new Schema({
  title: { type: String, required: true },
  post: { type: String, required: true },
  authorname: { type: String, required: true },
});

// this will be exported to be used for the routes
const Posts = mongoose.model("Posts", postSchema);

// here we're exporting
module.export = Posts;
