const express = require("express");
const path = require("path");

const app = express();

// middleware
app.use(express.static(path.resolve(__dirname, "./Products-website")));
// console.log(__dirname);
// console.log(path.resolve(__dirname, "./Products-website/index.html"));

// app.get("/", (req, res) => {
//   res
//     .status(200)
//     .sendFile(path.resolve(__dirname, "./Products-website/index.html"));
// });

app.listen(5000, () => {
  console.log("Server is running in http://localhost:5000");
});
