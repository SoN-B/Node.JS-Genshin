"use strict";

const output = {
    home : (req, res) => {
        res.render("home/Home.ejs");
    },
    chractor : (req, res) => {
        res.render("home/chractor.ejs");
    },
    loading : (rea, res) => {
        res.render("home/loading.ejs");
    },
};

module.exports = {
    output,
};