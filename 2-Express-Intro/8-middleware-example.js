const express = require("express");
const userMiddleware = require("./middlewares");
const app = express();

app.use(userMiddleware);

app.get("/user/:username", (req, res) => {
  const { username } = req.params;
  res.send(`<h1>Welcome to: ${username}</h1>`);
});

app.listen(5000, () => {
  console.log("Server is running in http://localhost:5000");
});
