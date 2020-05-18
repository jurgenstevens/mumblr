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

// this will be the connnection to MongoDB through .env
const uri = process.env.ATLAS_URI;
// S5: run "npm i dotenv" in terminal to connect to .env file

mongoose.connect(uri, {
  useNewUrlParser: true,
});

const connection = mongoose.connection;
connection.once("open", () =>
  console.log("Mongoose connnection established successfully")
);

app.listen(port, () => console.log(`The app is running on Port : ${port}`));
