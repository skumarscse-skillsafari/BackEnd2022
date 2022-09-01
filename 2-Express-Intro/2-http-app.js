const http = require("http");
const { readFileSync } = require("fs");

// Reading html, css and javascript file
const homePage = readFileSync("./Products-website/index.html");
const homeStyles = readFileSync("./Products-website/style.css");
const homeScript = readFileSync("./Products-website/script.js");
const bgImage = readFileSync("./Products-website/images/bg.jpg");
const productOneImg = readFileSync("./Products-website/images/product-1.jpg");
const productTwoImg = readFileSync("./Products-website/images/product-2.jpg");
const productThreeImg = readFileSync("./Products-website/images/product-3.jpg");
const productFourImg = readFileSync("./Products-website/images/product-4.jpg");

const server = http.createServer((req, res) => {
  // Home Page
  if (req.url === "/") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write(homePage);
    res.end();
  }
  // Style.css
  else if (req.url === "/style.css") {
    res.writeHead(200, { "Content-type": "text/css" });
    res.write(homeStyles);
    res.end();
  }
  // Script.js
  else if (req.url === "/script.js") {
    res.writeHead(200, { "Content-type": "text/javascript" });
    res.write(homeScript);
    res.end();
  }
  // Images
  else if (req.url === "/images/bg.jpg") {
    res.writeHead(200, { "Content-type": "image/jpg" });
    res.write(bgImage);
    res.end();
  } else if (req.url === "/images/product-1.jpg") {
    res.writeHead(200, { "Content-type": "image/jpg" });
    res.write(productOneImg);
    res.end();
  } else if (req.url === "/images/product-2.jpg") {
    res.writeHead(200, { "Content-type": "image/jpg" });
    res.write(productTwoImg);
    res.end();
  } else if (req.url === "/images/product-3.jpg") {
    res.writeHead(200, { "Content-type": "image/jpg" });
    res.write(productThreeImg);
    res.end();
  } else if (req.url === "/images/product-4.jpg") {
    res.writeHead(200, { "Content-type": "image/jpg" });
    res.write(productFourImg);
    res.end();
  }
  // Error Page
  else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.write(`
    <h1>Page Not Found...</h1>
    <a href="http://localhost:5000">Click here to back to Home Page</a>
    `);
    res.end();
  }
});

server.listen(5000, () => {
  console.log("Server is running in http://localhost:5000");
});
