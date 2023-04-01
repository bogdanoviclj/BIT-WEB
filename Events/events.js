"use strict";

var bodyNode = document.documentElement.children[1];
console.log(bodyNode);
function changeBackgroundColor() {
    bodyNode.classList.toggle("bColor");
}
function turnOff() {
    bodyNode.classList.remove("bColor");
}