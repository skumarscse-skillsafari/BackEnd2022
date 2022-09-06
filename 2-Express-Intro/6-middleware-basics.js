const express = require("express");

const app = express();

// middleware
// req <=> middleware <=> res
const welcomeMsg = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next();
};

app.get("/", welcomeMsg, (req, res) => {
  res.send("<h1>Hello...</h1>");
});

app.get("/about", welcomeMsg, (req, res) => {
  res.send("<h1>About Page...</h1>");
});

app.listen(5000, () => {
  console.log("Server is running in http://localhost:5000");
});
