const path = require("path");

console.log(path.sep);

const filePath = path.join("/3-own-modules", "2-module1.js");
// console.log(filePath); // \3-own-modules\2-module1.js
console.log(path.basename(filePath)); // 2-module1.js

const absolute = path.resolve(__dirname, "/3-own-modules", "2-module1.js");
console.log(absolute); // D:\3-own-modules\2-module1.js
