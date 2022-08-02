require("dotenv").config();

const mongoose = require("mongoose");
let mongoDB = process.env.MONGO_URL;

module.exports = mongoose.connect(mongoDB);
