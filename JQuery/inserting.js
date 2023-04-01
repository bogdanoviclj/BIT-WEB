$(function() {

    var images = ["https://img.traveltriangle.com/blog/wp-content/uploads/2017/05/Cover1.jpg", "https://cdn1.matadornetwork.com/blogs/1/2018/02/Taj-Mahal.jpg", "https://travel.home.sndimg.com/content/dam/images/travel/fullset/2015/10/12/new-seven-wonders-christ-the-redeemer.jpg.rend.hgtvcom.616.462.suffix/1491581548898.jpeg", "https://i.natgeofe.com/k/e924c4a8-cf47-4621-9ef8-20884ad2444f/Pyramids-at-Giza_square.png", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjpRWw8iKQL4DXQx9fgSL6nKHPsegloKcZdw&usqp=CAU", "https://publisher-ncreg.s3.us-east-2.amazonaws.com/pb-ncregister/swp/hv9hms/media/20200828060820_5f48866ac2bf74d8cce2781djpeg.jpeg"];

    var container = $("<div></div>");
    container.insertBefore("script");

    images.forEach(function(image) {
        var img = $("<img>");
        img.attr("src", image);
        img.appendTo(container);
    });

    container.prepend("<h1>Wonders of the world</h1>");

    container.find("img").each(function() {
        var width = Math.floor(Math.random() * 300) + 100;
        var height = Math.floor(Math.random() * 300) + 100;
        $(this).css({
            width: width + "px",
            height: height + "px"
        });
    });

    container.find("img").each(function() {
        var width = $(this).width();
        if (width < 200) {
            $(this).css("border", "3px solid green");
        } else {
            return false;
        };
    });

})