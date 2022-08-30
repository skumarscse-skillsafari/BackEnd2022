const http = require("http");

const server = http.createServer((req, res) => {
  // Home Page
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>This is Home page</h1>");
    res.end();

    // About Page
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>This is a About page</h1>");
    res.end();

    // Error Page
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Page Not found</h1>");
    res.end();
  }
});

server.listen(5000);
