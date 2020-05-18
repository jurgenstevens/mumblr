// S1: In terminal type 'npm init -y' to create package.json file//
// S2: In terminal type 'npm install'
// S3: In terminal type 'npm install express mongoose cors"
const express = require("express");
const mongoose = require("mopngoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// this will be the connnection to MongoDB through .env
const uri = process.env.ATLAS_URI;
