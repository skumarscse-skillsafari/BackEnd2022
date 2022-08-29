const { writeFileSync } = require("fs");

for (let i = 0; i < 10000; i++) {
  writeFileSync("./file.txt", `This is line number: ${i}\n`, { flag: "a" });
}
