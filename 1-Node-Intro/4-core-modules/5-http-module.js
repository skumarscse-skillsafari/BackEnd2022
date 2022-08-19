const http = require("http");

// Req - Res
// Server
// Port
// Req and Res

// console.log(http);
const server = http.createServer((req, res) => {
  // Req and Res as plain text
  //   if (req.url === "/") {
  //     // '/' => http://localhost:5000
  //     res.end("Welcome to my page");
  //   } else if (req.url === "/about") {
  //     res.end("This is About page");
  //   } else if (req.url === "/contact") {
  //     res.end("This is Contact page");
  //   } else {
  //     res.end("Page Not Found");
  //   }
  // Req and Res as HTML
  // console.log(req);
  // console.log(res);
  if (req.url === "/") {
    res.end(`
        <h1>Welcome to my page.</h1>
        <p>This is my home page.</p>
    `);
  } else if (req.url === "/about") {
    res.end(`
    <h1>This is about page.</h1>
    <a href="/">Back to home page</a>
    `);
  } else if (req.url === "/contact") {
    res.end(`
    <h1>This is contact page.</h1>
    <a href="/">Back to home page</a>
    `);
  } else {
    res.end(`
    <h1>Page not found.</h1>
    <a href="/">Back to home page</a>
    `);
  }
});

server.listen(5000);
