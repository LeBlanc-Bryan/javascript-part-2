//1. Create a function that can be used with sort. This function should take two strings, //
//and return a value that sort can use to determine which is the longest string. //
//Finally, create an array of strings and try to get it sorted using your new function.//
var names = ["Jackolantern", "Markymark", "Jillyjull", "Gabriel"];

function compare(a, b) {
  return b.length - a.length;
}

console.log(names.sort(compare));

//2. Create an array of objects (don’t need to use new here, just regular object literals).//
//These objects will contain a name and email property. Then, run some code that will sort your array by the longest name.// 
//Then, run some code that will sort your array by e-mail address in alphabetical order.//
var contacts = [
    {name: "yarn", email: "yarn@hotmail.com"},
    {name: "big daddy", email: "bigdaddio@gmail.com"},
    {name: "andarc", email: "andrewnovosad@hotmail.com"},
    {name: "darkmaster", email: "dm@master.com"}
    ];

function compareNames(a, b) {
    return b.name.length - a.name.length; 
}
console.log(contacts.sort(compareNames));

function alphaEmail(a, b) {
    if(a.email < b.email) {
        return -1;
    } 
    else if (a.email > b.email) {
        return 1;
    }
    else {
    return 0;
    }
}
console.log(contacts.sort(alphaEmail));

//3. Create a function that can be used with Array.prototype.map. This function should take a number and return its square.//
//Then, use this function with map on an array of numbers to check the result.//
var numbArr = [3, 9, 5, 74, 285, 1001, 54, 17];

var sqrArr = numbArr.map(function(x) {
   return x*x;
});
console.log(sqrArr);