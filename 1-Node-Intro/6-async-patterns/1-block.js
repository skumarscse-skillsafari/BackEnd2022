const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("<h1>This is a Home Page</h1>");
  }
  if (req.url === "/about") {
    for (let i = 0; i < 10000; i++) {
      for (let j = 0; j < 10000; j++) {
        console.log(`${i}, ${j}`);
      }
    }
    res.end("<h1>This is About Page</h1>");
  }
  res.end("<h1>Page not found</h1>");
});

server.listen(5000);
