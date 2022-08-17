// import the exported values, we need require() function
// Syntax
// let varName = require('/path_of_the_exported_module')
let varNames = require("./2-module1");
let obj = require("./3-module2");
let fun = require("./4-module3");
let arr = require("./5-module4");
require("./6-module5"); // FullName is: John, Jack
console.log(varNames.firstName); // { firstName: 'John', lastName: 'Jack', age: 30 } // John
console.log(obj.mango); // { mango: 100, orange: 80, apple: 90 } // 100
fun("Hello, I am from 1-index.js"); // Hello from 4-module3.js Hello, I am from 1-index.js
console.log(arr.subjects[0]); // { subjects: [ 'English', 'Maths', 'Physics', 'Chemistry' ] } // English
