// window.navigator
// Create a function that prints out in the console the following information
// ●	the platform on which the browser is running
// ●	the information about the browser version
// ●	the company that created that browser
// Each piece of information should be printed out in a new row.

var platform = function() {
    console.log(window.navigator.platform);
    console.log(window.navigator.appVersion);
    console.log(window.navigator.appName);
}();

// Create new “isOnline” function that checks if the browser is online.
// It should print out “online” when the browser is online and “offline” when there is no Internet connection.

var isOnLine = function() {
    if(window.navigator.onLine) {
        return "online";
    } else {
        return "offline";
    }
};
console.log(isOnLine());

// window.screen
// Create a function that prints out the following information in the console:
// ●	current browser width and height
// ●	max possible browser height

var dimension = function() {
    console.log(window.screen.availWidth, window.screen.availHeight);
    console.log(window.screen.height);
}();

// window.location
// Write a function that prints out website’s url information in the console:
// ●	full url address
// ●	domain name
// ●	used protocol
// ●	parameters which are part of URL.

var webInfo = function() {
    console.log(window.location.href);
    console.log(window.location.hostname);
    console.log(window.location.protocol);
    console.log(window.location.search);
}();

// Create a function for reloading the page.

var reloadPage = function() {
    window.location.reload();
};
// reloadPage();


// Create a function that redirects you to a website address passed to it.
// Test all three functions

var redirect = function() {
    window.location.assign("https://www.google.com/");
};
// redirect();

// window.localStorage
// Create a function that stores passed data in the browser local storage.

var storeData = function() {
    localStorage.setItem("Day", "Sunday");
}
storeData();

// Create a function that reads the stored data, and print it out in console.
// If there is no data, print "There is no data" in the console.

var readData = function(){
    if (localStorage.length !== 0) {
        console.log(localStorage.getItem("Day"));
    } else {
        console.log("There is no data");
    }
}
readData();

// Create a function that removes data from the local storage.
    
var removeData = function() {
    localStorage.removeItem("Day");
}
removeData();

// Use the previously created functions to store/read/remove some data.

localStorage.setItem("Day", "Monday");
readData();
localStorage.removeItem("Day");
readData();

// Then add some data in storage and close the browser.
// Open the browser again on the same page and use the function to read the stored value.

// Modify functions to work with sessionStorage instead of localStorage.
// Try same scenario as with localStorage to examine data livecycle.








// var sStorage = function() {
    
// }









// window.history.back();
// window.history.forward();
// function goBack() {
//     window.history.go(-2);
// };
// console.log(goBack());