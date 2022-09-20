import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import tasks from "./routes/tasks.js";
const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>Activity Manager</h1>");
});

app.use("/api/v1/tasks", tasks);

const PORT = process.env.PORT;
const CONNECTION_URL = process.env.CONNECTION_URL;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server is running in: http://localhost:${PORT}`);
    })
  )
  .catch((err) => console.log(`${err}: did not connect`));
