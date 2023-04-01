$(function() {
    
    var imgFirstGallery = ["https://img.traveltriangle.com/blog/wp-content/uploads/2017/05/Cover1.jpg", "https://cdn1.matadornetwork.com/blogs/1/2018/02/Taj-Mahal.jpg", "https://travel.home.sndimg.com/content/dam/images/travel/fullset/2015/10/12/new-seven-wonders-christ-the-redeemer.jpg.rend.hgtvcom.616.462.suffix/1491581548898.jpeg"];

    var imgSecondGallery = ["https://i.natgeofe.com/k/e924c4a8-cf47-4621-9ef8-20884ad2444f/Pyramids-at-Giza_square.png", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjpRWw8iKQL4DXQx9fgSL6nKHPsegloKcZdw&usqp=CAU", "https://publisher-ncreg.s3.us-east-2.amazonaws.com/pb-ncregister/swp/hv9hms/media/20200828060820_5f48866ac2bf74d8cce2781djpeg.jpeg"];

    $("<div></div>").addClass("gallery1").insertBefore("script:first");
    $("<div></div>").addClass("gallery2").insertBefore("script:first");

    imgFirstGallery.forEach(function(image) {
        var img = $("<img>");
        img.attr("src", image);
        img.css("width", "33%");
        img.appendTo($(".gallery1"));
    });

    imgSecondGallery.forEach(function(image) {
        var img = $("<img>");
        img.attr("src", image);
        img.css("width", "33%");
        img.appendTo($(".gallery2"));
    });

    $(".gallery1 img").first().addClass("selected");
    $(".selected").css("border", "3px solid red");

    function moveBorder() {
        var selected = $(".gallery1 img.selected");
        selected.removeClass("selected").css("border", "none");
        var middle = $("body").children(".gallery2").find("img").eq(1);
        middle.addClass("selected").css("border", "3px solid red");
    };

    moveBorder();
})