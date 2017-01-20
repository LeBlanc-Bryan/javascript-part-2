var strArray = ["bee", 'vanessa', 'honey', 'jerry seinfeld'];

function compare(a, b) {
  if (a.length < b.length) {
    return 1;
  }
  else if (a.length > b.length) {
    return -1;
  }
  else {
    return 0;
  }
}

console.log(strArray.sort(compare));

//

var arrObj = [{
  name: "Superlongname",
  email: "s@s.com"
}, {
  name: "short",
  email: "superlong@superlong.com"
}, {
  name: "Rick",
  email: "Rick@sanchez.com"
}, {
  name: "Al",
  email: "Al@al.com"
}, {
  name: "Bigassnameintendedtobeverylong",
  email: "big@assname.com"
}];

function compare2(a, b) {
  if (a.name.length < b.name.length) {
    return 1;
  }
  else if (a.name.length > b.name.length) {
    return -1;
  }
  else {
    return 0;
  }
}

function longestName(arr) {
  return arr.sort(compare2);
}

console.log(longestName(arrObj));

//

function compare3(a, b) {
  if (a.email.toLowerCase() < b.email.toLowerCase()) {
    return -1;
  }
  if (a.email.toLowerCase() > b.email.toLowerCase()) {
    return 1;
  }
  return 0;
}

function emailSort(arr) {
  return arr.sort(compare3);
}

console.log(emailSort(arrObj));

//

var numArray = [3, 7, 9, 55, 100, -58, 99, -43, 0, -4];

function sqr(num) {
  return num * num;
}

console.log(numArray.map(sqr));

//

var numArrObj = [{
  num: 5
}, {
  num: 77
}, {
  num: -3
}];

function sqr2(numObj) {
  return numObj.num * numObj.num;
}
console.log(numArrObj.map(sqr2));

//

function operationMaker(operation) {
  if (operation == "add") {
    return function(a, b) {
      return a + b;
    }
  }
  if (operation == "subtract") {
    return function(a, b) {
      return a - b;
    }
  }
  if (operation == "mult") {
    return function(a, b) {
      return a * b;
    }
  }
  if (operation == "div") {
    return function(a, b) {
      return a / b;
    }
  }
  else {
    console.log("Please enter a valid operation - add, subtract, mult or div.");
  }
}
//
