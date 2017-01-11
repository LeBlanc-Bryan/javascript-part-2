//1. Create a function that can be used with sort. This function should take two strings, //
//and return a value that sort can use to determine which is the longest string. //
//Finally, create an array of strings and try to get it sorted using your new function.//
var names = ["Jackolantern", "Markymark", "Jillyjull", "Gabriel"];

function compare(a, b) {
  return b.length - a.length;
}

console.log(names.sort(compare));