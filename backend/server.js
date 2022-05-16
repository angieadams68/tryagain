const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
const db = require('./db')
const logger = require("morgan");




///// MIDDLEWARE /////
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));
 




















 ///// EXPRESS SERVER LISTEN TO PORT /////
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));