const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.end("Hello");
//   }
// });

const server = http.createServer();
server.on("request", (req, res) => {
  if (req.url === "/") {
    res.end("Hello from request event");
  }
});

server.listen(5000);
