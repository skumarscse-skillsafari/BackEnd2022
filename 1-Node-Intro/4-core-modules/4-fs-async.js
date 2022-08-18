const { readFile, writeFile } = require("fs");

console.log("------------- START ---------------");
// Read operation
// Syntax
// readFile("path", "encode", "callbackFn with err, data")
readFile("./content/file1.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const file1 = data;
  readFile("./content/file2.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const file2 = data;

    // Write operation
    // Syntax
    // writeFile("path", "result", "callback with err and data")
    writeFile(
      "./content/write1.txt",
      `The content of file1.txt and file2.txt is: ${file1}, ${file2}\n`,
      (err, data) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("--------- Task Completed ---------");
      }
    );
  });
});
