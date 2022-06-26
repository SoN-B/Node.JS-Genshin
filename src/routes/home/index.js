"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./ctrl/home.ctrl");

//home routes
router.get("/", ctrl.output.home);
router.get("/chractor", ctrl.output.chractor);

module.exports = router;