const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request event");
  res.end("Hello");
});

server.listen(5000);
