const express = require("express");
const app = express();

// Middleware - 1
const middlewareOne = (req, res, next) => {
  console.log("I am from middleware - 1");
  next();
};

// Middleware - 2
const middlewareTwo = (req, res, next) => {
  console.log("I am from middleware - 2");
  next();
};

// app.get("/", [middlewareOne, middlewareTwo], (req, res) => {
//   res.send("<h1>Adding multiple middlewares...</h1>");
// });

// app.get("/about", [middlewareOne, middlewareTwo], (req, res) => {
//   res.send("<h1>This is About Page...</h1>");
// });

// app.get("/skills", [middlewareOne, middlewareTwo], (req, res) => {
//   res.send("<h1>This is Skills Page...</h1>");
// });

// app.use([middleware-1, middleware-2, ..., middleware-N])
app.use([middlewareOne, middlewareTwo]);
// app.use("path", middlewareFun)
app.use("/skills", middlewareOne);

app.get("/", (req, res) => {
  res.send("<h1>Adding multiple middlewares...</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>This is About Page...</h1>");
});

app.get("/skills", (req, res) => {
  res.send("<h1>This is Skills Page...</h1>");
});

app.listen(5000, () => {
  console.log("Server is running in http://localhost:5000");
});
