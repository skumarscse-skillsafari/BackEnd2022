const { readFileSync, writeFileSync } = require("fs");

// console.log(readFileSync);
// console.log(writeFileSync);

console.log("----------- START ---------------");
// Read operation
// Syntax
// readFileSync("path", "encode") // encode => utf8
console.log("------------- File-1 -------------");
const file1 = readFileSync("./content/file1.txt", "utf-8");
console.log(file1);
console.log("------------- File-2 --------------");
const file2 = readFileSync("./content/file2.txt", "utf-8");
console.log(file2);

// Write operation
// Syntax
// writeFileSync("path", "data", "options")
writeFileSync(
  "./content/write.txt",
  `The content of file1.txt and file2.txt: ${file1}, ${file2}\n`,
  { flag: "a" }
);
console.log("---------------- Task Done -----------");
console.log("--------------- Next Task ------------");
