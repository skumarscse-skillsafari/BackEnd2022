import Task from "../models/taskModel.js";
// Getting single task with id - http://localhost:5000/api/v1/tasks/:id
export const getTask = () => {};

// Getting all the tasks - http://localhost:5000/api/v1/tasks
export const getAllTasks = () => {};

// Create a task - http://localhost:5000/api/v1/tasks
export const createTask = (req, res) => {
  console.log(req.body); // { name: "SkillSafari", completed: false }
  const { name, completed } = req.body;
  const newTask = new Task({
    name,
    completed,
  });
  newTask
    .save()
    .then(() => res.status(201).json({ success: true, data: newTask }))
    .catch((err) => res.status(400).json({ success: false, message: err }));
};

// Update a task with id - http://localhost:5000/api/v1/tasks/:id
export const updateTask = () => {};

// Delete a task with id - http://localhost:5000/api/v1/tasks/:id
export const deleteTask = () => {};
