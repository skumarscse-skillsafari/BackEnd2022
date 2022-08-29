const { createReadStream } = require("fs");

// Stream => Splitting the data into different chuncks (size), default: 64kb.
// Ex: 100kb => 64kb + 36kb
// Ex: 130kb => 64kb + 64kb + 2kb
// highWaterMark => modify/define my own chuck size
const stream = createReadStream("./file.txt", { highWaterMark: 30000 });

// const stream = createReadStream("./file.txt", { encoding: "utf-8" });
// console.log(stream);

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => {
  console.log(err);
});
