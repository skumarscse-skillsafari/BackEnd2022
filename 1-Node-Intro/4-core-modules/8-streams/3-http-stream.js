const http = require("http");
const fs = require("fs");

let server = http.createServer((req, res) => {
  //   const data = fs.readFileSync("./file.txt", "utf-8");
  //   res.end(data);
  const fileStream = fs.createReadStream("./file.txt", "utf-8");
  fileStream.on("open", () => {
    fileStream.pipe(res);
  });

  fileStream.on("error", (err) => {
    res.end(err);
  });
});

server.listen(5000);
