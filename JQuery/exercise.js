$(function() {
    console.log("Hello, world!");

    $("li:first").css("border-bottom", "1px solid red");
    $("li").css("text-transform", "uppercase");
    $("li.active").css("color", "blue");
    var middle = Math.ceil($("li").length/2 - 1);
    $("li").eq(middle).css("background-color", "pink");
})