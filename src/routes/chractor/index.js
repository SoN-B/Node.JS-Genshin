"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./ctrl/chractor.ctrl");

//chractor routes
router.get("/", ctrl.output.chractor);
router.get("/pyro", ctrl.output.pyro);
//router.get("/hydro", ctrl.output.hydro);
//router.get("/anemo", ctrl.output.anemo);
//router.get("/electro", ctrl.output.electro);
//router.get("/cryo", ctrl.output.cryo);
//router.get("/geo", ctrl.output.geo);

module.exports = router;