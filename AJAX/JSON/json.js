var button = document.querySelector("#button");
function getImage() {
    var request = new XMLHttpRequest();
    request.open("GET", "https://dog.ceo/api/breeds/image/random");
    request.send();
    request.onload = function() {
        if (request.status === 200) {
            var response = JSON.parse(request.responseText);
            var imgUrl = response.message;
            var img = document.createElement("img");
            img.setAttribute("height", "250px");
            img.src = imgUrl;
            document.querySelector("#dog-image").appendChild(img);
        } else {
            console.log("Error: " + request.status + " !");
        }
    }
}
button.addEventListener("click", getImage);