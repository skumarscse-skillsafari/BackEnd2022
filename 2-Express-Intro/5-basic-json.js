const express = require("express");
const users = require("./data");

// console.log(users);

const app = express();

app.get("/", (req, res) => {
  res.status(200).send(`
    <h1>Welcome to Users Page</h1>
    <a href="/api/users">Click here to view users</a>
  `);
});

app.get("/api/users", (req, res) => {
  const newUsers = users.map((user) => {
    const { id, name, username, email } = user;
    return { id, name, username, email };
  });
  res.status(200).json(newUsers);
});

// res.send() => text/html
// res.sendFile() => file as response
// res.json() => json data as response

app.listen(5000, () => {
  console.log("Server is running in http://localhost:5000");
});
