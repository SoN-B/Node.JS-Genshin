"use strict";

//Module Settings
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//Routing Settings
const home = require("./src/routes/home");

//Web Settings
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", home);

//Export
module.exports = app;