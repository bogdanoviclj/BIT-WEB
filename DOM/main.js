// Selecting One/Multiple Elements

// Create two unordered lists on the page.

// Create a function that selects the second list and applies a class that sets some background color to it.


function selectSecondList () {
    var secondList = document.getElementById("secondList");
    secondList.classList.add("bgColor");
    return secondList;
}
var q = selectSecondList();
console.log(q);

// Create a second function that, when triggered, selects all <li> elements on the page. 
// The function also sets a class that sets some bg color to every <li> element.


function selectAllLists () {
    var list = document.getElementsByTagName("li");
    // for (var i = 0; i < list.length; i++) {
    //     list[i].classList.add("liColor");
    // }
    return list;
}
var w = selectAllLists();
console.log(w);


// Create one more unordered list and one more function
// The function should select only <li> elements from that last list
// Each <li> element should get a class that sets some bg color and transforms the text to uppercase.


function selectLastLi () {
    var lastList = document.getElementsByTagName("ul")[2];
    var lastLi = lastList.children;
    for (var i = 0; i < lastLi.length; i++) {
        lastLi[i].classList.add("transform");
    }
    return lastLi;
}
var e = selectLastLi();
console.log(e);


// Traversing

// Create two unordered lists.
// Each list should be wrapped in a div element.
// One <li> element in the second list should have a class “active”, which sets its background color.

// Create a function that selects the <li> element with class “active”.
// Remove the class from that element, and then select the first <li> element in the first unordered list using node relations.
// Apply class to that newly selected <li> element


function selectLiActive () {
    var el = document.querySelector(".active");
    el.classList.remove("active");
    var firstLi = document.getElementsByTagName("div")[0].firstElementChild.firstElementChild;
    firstLi.classList.add("active");
    return firstLi;
}
var r = selectLiActive();
console.log(r);


// Access/Update Text Node

// Create an unordered list containing <li> items that represent navigation.

// Create a function that takes text from one of the <li> elements and presents it on screen using alert.
  

function presentText () {
    var l = document.documentElement.lastElementChild.children[5].children[2];
    return alert(l.textContent); 
}
presentText();


// Create one more function.
// The function should take some text as an argument.
// The function should select the last <li> element in the list and replace its text with text passed as the function argument.


function replace (text) {
    var lastListEl = document.documentElement.children[1].children[5].children[3];
    lastListEl.textContent = text;
    return lastListEl; 
}
var y = replace("Hello");
console.log(y);


// InnerHTML

// Do the following exercise in two ways: using DOM manipulation methods and using innerHTML.
// Create a function that is used for building a dropdown/select element.
// It first builds a dropdown and then adds it to the DOM.
// The function takes two arguments: the first is an array of strings and the second is a DOM node to which the dropdown will be added.
// Create options that correspond to items in the passed array and add them to the select element.
// Add the whole dropdown list to DOM .

function buildDropdown (array, node) {
    var select = document.createElement("Select");
    var selectNode = document.getElementsByTagName("div")[1];
    var options = document.createTextNode("options");
    select.appendChild(options);
}
var node = document.getElementsByTagName("div")[0];
buildDropdown(["a", "b", "c"], node);

// Use this function to create two selects on the page.
// The first select should be appended to the first div on the page.
// The second select should be appended to the last div on the page.




// Attributes

// Create a form that contains multiple input elements with labels.
// Some of those elements should be required.





// Create a function that validates the form.
// The function checks each input element that belongs to the form.
// If the element has the required attribute and no data, it should get red borders.
