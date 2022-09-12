import { uid } from "uid";
import users from "../data.js";

// http://localhost:5000/api/users
export const getAllUsers = (req, res) => {
  res.status(200).json({ success: true, data: users });
};

// http://localhost:5000/api/users/postman/:id
export const getSingleUser = (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === Number(id));
  res.status(200).json({ success: true, user });
};

// http://localhost:5000/api/users
export const createUserFormData = (req, res) => {
  // console.log(req.body);
  const { username } = req.body; // { username: "John" }
  res.status(200).send(`<h1>Welcome, ${username}</h1>`);
};

// http://localhost:5000/api/users/postman
export const createUserJsonData = (req, res) => {
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
};

// http://localhost:5000/api/users/postman/:id
export const updateUser = (req, res) => {
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
};

// http://localhost:5000/api/users/postman/:id
export const deleteUser = (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === Number(id));
  if (!user) {
    return res
      .status(404)
      .json({ success: false, msg: `No data with the id: ${id}` });
  }
  const newUsers = users.filter((user) => user.id !== Number(id));
  return res.status(200).json({ success: true, data: newUsers });
};
