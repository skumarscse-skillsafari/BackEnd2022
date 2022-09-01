const express = require("express");

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to Express!!!</h1>");
});

app.get("/about", (req, res) => {
  res.status(200).send("<h1>This is About Page</h1>");
});

app.get("/skills", (req, res) => {
  res.status(200).send("<h1>This is Skills Page</h1>");
});

app.get("/contact", (req, res) => {
  res.status(200).send("<h1>This is Contact Page</h1>");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});

app.listen(port, () => {
  console.log(`Server is running in http://localhost:${port}`);
});

/*
app.get() => get resource fron the server
app.all() => display error page
app.post() => send some "data" to the server 
app.put() => update the existing "data" in the server
app.patch() => update the part of the existing "data" in the server
app.delete() => delete the existing "data" in the server
app.listen() => add port number and display some message
app.use() => add middlewares
*/
