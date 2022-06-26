"use strict";

const output = {
    home : (req, res) => {
        res.render("home/index.ejs");
    },
    chractor : (req, res) => {
        res.render("chractor/index.ejs");
    },
};

module.exports = {
    output,
};