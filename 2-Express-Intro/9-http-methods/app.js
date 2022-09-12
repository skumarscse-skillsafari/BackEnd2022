import express from "express";
import dotenv from "dotenv";
import users from "./routes/users.js";
import userLogin from "./routes/userLogin.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(express.static("./public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

// "/" => http://localhost:5000/api/users
app.use("/api/users", users);
app.use("/login", userLogin);

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
