import express from "express";
import {
  getAllUsers,
  getSingleUser,
  createUserFormData,
  createUserJsonData,
  updateUser,
  deleteUser,
} from "../controllers/users.js";
const router = express.Router();

// Method - 1
// Get all the users
// "/" => http://localhost:5000/api/users
// router.get("/", getAllUsers);

// Get single user
// router.get("/postman/:id", getSingleUser);

// Create new user with formData
// router.post("/", createUserFormData);

// Create new user with json using postman
// router.post("/postman", createUserJsonData);

// Update existing data
// Find the data to be updated => id
// Send the newData to the server
// router.put("/postman/:id", updateUser);

// Delete existing data
// id
// router.delete("/postman/:id", deleteUser);

// Method - 2
router.route("/").get(getAllUsers).post(createUserFormData);
router.route("/postman").post(createUserJsonData);
router
  .route("/postman/:id")
  .get(getSingleUser)
  .post(updateUser)
  .delete(deleteUser);

export default router;
