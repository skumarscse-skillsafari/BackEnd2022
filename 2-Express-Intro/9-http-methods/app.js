import express from "express";
import dotenv from "dotenv";
import { uid } from "uid";
import users from "./data.js";
const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(express.static("./public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

// Get all the users
app.get("/api/users", (req, res) => {
  res.status(200).json({ success: true, data: users });
});

// Get single user
app.get("/api/users/postman/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === Number(id));
  res.status(200).json({ success: true, user });
});

// Create new user with formData
app.post("/api/users", (req, res) => {
  // console.log(req.body);
  const { username } = req.body; // { username: "John" }
  res.status(200).send(`<h1>Welcome, ${username}</h1>`);
});

// Create new user with json using postman
app.post("/api/users/postman", (req, res) => {
  const id = uid();
  const { username } = req.body;
  if (!username) {
    return res
      .status(400)
      .json({ success: false, msg: "Please enter username" });
  }
  return res
    .status(201)
    .json({ success: true, data: [...users, { id, username }] }); // { id: id, username: username }
});

// Update existing data
// Find the data to be updated => id
// Send the newData to the server
app.put("/api/users/postman/:id", (req, res) => {
  const { id } = req.params;
  const { username } = req.body;
  const user = users.find((user) => user.id === Number(id));
  if (!user) {
    return res
      .status(404)
      .json({ success: false, msg: `No data with the id: ${id}` });
  }
  const updatedUsers = users.map((user) => {
    if (user.id === Number(id)) {
      user.username = username;
    }
    return user;
  });
  return res.status(200).json({ success: true, data: updatedUsers });
});

// Delete existing data
// id
app.delete("/api/users/postman/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === Number(id));
  if (!user) {
    return res
      .status(404)
      .json({ success: false, msg: `No data with the id: ${id}` });
  }
  const newUsers = users.filter((user) => user.id !== Number(id));
  return res.status(200).json({ success: true, data: newUsers });
});

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
