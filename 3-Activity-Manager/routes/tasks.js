import express from "express";
import {
  getTask,
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/tasksController.js";
const router = express.Router();

// getTask => Getting single task from the database
// route.get("url", controllerFn)
router.get("/:id", getTask); // http://localhost:5000/api/v1/tasks/:id

// getAllTasks => Getting all the tasks from the database
router.get("/", getAllTasks); // http://localhost:5000/api/v1/tasks

// createTask => Create new task in the database
router.post("/", createTask); // http://localhost:5000/api/v1/tasks

// updateTask => Update the existing task in the database
router.patch("/:id", updateTask); // http://localhost:5000/api/v1/tasks/:id

// deleteTask => Deletete the existing task in the database
router.delete("/:id", deleteTask); // http://localhost:5000/api/v1/tasks/:id

export default router;
