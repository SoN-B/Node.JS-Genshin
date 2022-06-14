"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/chractor", ctrl.output.chractor);
router.get("/loading", ctrl.output.loading);

module.exports = router;