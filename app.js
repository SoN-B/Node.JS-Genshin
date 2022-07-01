"use strict";

//Module Settings
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//Web Settings
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//Routing Settings
const home = require("./src/routes/home");
const chractor = require("./src/routes/chractor");
const c_pyro = require("./src/routes/chractor/pyro");

app.use("/", home);
app.use("/chractor", chractor);
app.use("/chractor/pyro", c_pyro);

//Export
module.exports = app;