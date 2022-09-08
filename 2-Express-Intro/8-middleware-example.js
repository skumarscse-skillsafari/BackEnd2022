const express = require("express");
const userMiddleware = require("./middlewares");
const app = express();

app.use("/user", userMiddleware);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to users page</h1>");
});

app.get("/user", (req, res) => {
  const { username } = req.query;
  res.send(`<h1>Welcome to: ${username}</h1>`);
});

app.listen(5000, () => {
  console.log("Server is running in http://localhost:5000");
});
