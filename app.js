const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv').config();
const dbConfig = require("./app/config/dbconfig");
const mongoose = require("mongoose");

const app = express();

let corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

mongoose
  .connect(dbConfig.dbUri, dbConfig.mongooseOptions)
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });


// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
app.get("/", (req, res) => {
  res.json({ message: "Welcome to pilarTecno application." });
});
require('./app/routes/vaccination.routes')(app);