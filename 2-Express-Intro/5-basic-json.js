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

// params and query
// params
app.get("/api/users/:userID", (req, res) => {
  // console.log(req.params); // { userID: '1' }
  const { userID } = req.params;
  const singleUser = users.find((user) => user.id === Number(userID));
  // console.log(singleUser);
  if (!singleUser) {
    res.status(200).json({
      sucess: true,
      data: [],
      msg: `User with given ID: ${userID}  does not exists`,
    });
  }
  res.status(200).json(singleUser);
});

// Multiple params property name
app.get("/api/user/:userID/product/:productID", (req, res) => {
  console.log(req.params); // { userID: '20', productID: '12' }
});

// query
app.get("/api/v1/user", (req, res) => {
  // name and limit
  // console.log(req.query); // {} { name: 'john', limit: '4' }
  const { name, limit } = req.query;
  // console.log(name, limit);
  let tempUsers = [...users];
  if (name) {
    tempUsers = tempUsers.filter((user) => {
      return user.name.startsWith(name);
    });
  }

  if (limit) {
    tempUsers = tempUsers.slice(0, Number(limit));
  }

  if (tempUsers.length < 1) {
    return res
      .status(200)
      .json({ success: true, data: [], msg: "No matches found" });
  }
  return res.status(200).json(tempUsers);
});

app.listen(5000, () => {
  console.log("Server is running in http://localhost:5000");
});
