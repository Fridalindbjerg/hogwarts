import express from "express";
import * as studentsController from "../controllers/students.controller.js";

const studentRouter = express.Router();

//students

// GET all students
studentRouter.get("/", studentsController.getAllStudents);

// GET single student by ID
studentRouter.get("/:id", studentsController.singleStudent);

// CREATE single student
studentRouter.post("/", studentsController.createStudent);

// UPDATE single student
studentRouter.put("/:id", studentsController.updateStudent);

// DELETE single student
studentRouter.delete("/:id", studentsController.deleteStudent);

export default studentRouter;
