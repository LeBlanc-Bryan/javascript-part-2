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

//4. Create a function that can be used with Array.prototype.map.//
//This function should be able to take an object and square its “num” property.// 
//Then, use this function with map on an array of objects each containming a “num” property.//
var objArr = [
    {name: "Alex", num: 345},
    {name: "Fauster", num: 777},
    {name: "Eefa", num: 13},
    {name: "Anabelle", num: 24},
];
function squareNum(x) {
   return x.num * x.num;
}
console.log(objArr.map(squareNum));
//5. In a previous workshop, you had to create a function that took two numbers and an operation (add, sub, mult, …)//
//and returned the result of the operation on the two numbers. Here we are going to do the same but at a higher order.//
//Create a function called operationMaker that takes only a string called operation as argument.//
//This string could be “add”, “subtract”, “mult” or “div”.//
//Your function will return a function that will take two numbers and return the result of running operation on these numbers.// 
//The end result should let me do something like this://
//var adder = operationMaker(“add”);//
//var sum = adder(5, 10); //15//

//var mult = operationMaker(“mult”);//
//var product = mult(5, 10); // 50//

function operationMaker(operation) {
    if (operation === "add") {
        return function add(a,b){
            return a + b;
        }
    }
    if(operation === "sub") {
        return function sub(a,b){
            return a - b;
        }
    }
    if(operation === "mult") {
        return function mult(a,b){
            return a * b;
        }
    }
    if(operation === "div") {
        return function div(a,b) {
            return a / b;
        }
    }
}
var adder = operationMaker("add");
var sum = adder(5, 10);
console.log(sum);

var subtracter = operationMaker("sub");
var diff = subtracter(10, 20);
console.log(diff);

var multiplier = operationMaker("mult");
var product = multiplier(7, 9);
console.log(product);

var divider = operationMaker("div");
var div = divider(9, 3);
console.log(div);