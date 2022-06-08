"use strict";

Btn = document.querySelector("#button1");

Btn.addEventListener("click",chractor);

function chractor() {
    fetch("/chractor", {
        method: "GET",
    });
}