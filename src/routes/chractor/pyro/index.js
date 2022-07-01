"use strict";

const express = require("express");
const router = express.Router();
var Chractors = require("../../../../models/Chractor")

//const ctrl = require("./ctrl/chractor.ctrl");

//pyro routes
router.post('/', (req, res) => {
    Chractors.create(req.body, (err) => {
        //console.log(req.body);
        if(err) return res.json(err);
        res.redirect('/chractor/pyro');
    });
});

module.exports = router;