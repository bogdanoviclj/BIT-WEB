function sendMessage() {
    var messages = document.querySelector("input").value;
    console.log(messages);
    var area = document.getElementsByClassName("sentArea");
    console.log(area);
    var listItem = document.createElement("li");
    listItem.appendChild(messages); 
    area.appendChild(listItem);
}