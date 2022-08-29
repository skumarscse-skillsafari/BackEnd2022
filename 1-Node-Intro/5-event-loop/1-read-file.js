const { readFile, writeFile } = require("fs");

console.log("Started the first task"); // 1

// writeFile("./file.txt", "This is from file.txt", (err, res) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("Written successfully");
// });

readFile("./file.txt", "utf-8", (err, data) => {
  // moves to event-loop
  if (err) {
    console.log(err);
    return;
  }
  console.log(data); // 3
  console.log("Reading file completed"); // 4
});

console.log("Starting next task"); // 2
