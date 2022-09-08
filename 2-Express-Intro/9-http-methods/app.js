import express from "express";
import dotenv from "dotenv";
import users from "./data.js";
const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(express.static("./public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.get("/api/users", (req, res) => {
  res.status(200).json({ success: true, data: users });
});

app.post("/api/users", (req, res) => {
  // console.log(req.body);
  const { username } = req.body;
  res.status(200).send(`<h1>Welcome, ${username}</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
