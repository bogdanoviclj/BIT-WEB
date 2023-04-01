var button = document.querySelector("#button");
var ip = document.querySelector("#ip");
var country = document.querySelector("#country");
function getData() {
    var request = new XMLHttpRequest();
    request.open("GET", "http://www.geoplugin.net/xml.gp?ip=xx.xx.xx.xx");
    request.onload = function() {
        if (request.status === 200) {
            var response = request.responseXML;
            var countryName = response.getElementsByTagName("geoplugin_countryName")[0].childNodes[0].nodeValue;
            country.textContent = countryName;
        }
    }
    request.send();
}


button.addEventListener("click", getData);