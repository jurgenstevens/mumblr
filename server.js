// S1: In terminal type 'npm init -y' to create package.json file//
// S2: In terminal type 'npm install'
// S3: In terminal type 'npm install express mongoose cors"
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// this will be the connection to MongoDB through .env
const uri = process.env.ATLAS_URI;
// S5: run "npm i dotenv" in terminal to connect to .env file

mongoose.connect(uri, {
  useNewUrlParser: true,
  // S6: added the following option according nodejs instructions to use new Server Discover and Monitoring engine
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () =>
  console.log("Mongoose connnection established successfully")
);
// mongoose.connection.on("error", (err) => {
//   console.log("MongoDB connection error: ", err);
// });

// this is the middleware, and will be imported from the posts.js in routes folder
const postsRouter = require("./routes/posts");
app.use("/posts", postsRouter);

// DEPLOYMENT conditional
if (process.env.NODE_ENV === "production") {
  app.use(express.static("mumblr/build"));
}

app.listen(port, () => console.log(`The app is running on Port : ${port}`));
// Mongoose server connection runs without any issues
// Next create the schema in models/posts.js
