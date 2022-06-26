"use strict";

const output = {
    chractor : (req, res) => {
        res.render("chractor/index.ejs");
    },
    pyro : (req, res) => {
        res.render("chractor/pyro.ejs");
    },
};

module.exports = {
    output,
};