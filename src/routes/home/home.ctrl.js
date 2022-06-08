"use strict";

const output = {
    home : (req, res) => {
        res.render("home/Home.ejs");
    },
    chractor : (req, res) => {
        res.render("home/chractor.ejs");
    }
};

module.exports = {
    output,
};