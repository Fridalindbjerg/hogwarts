import express from "express";
import * as teachersController from "../controllers/teachers.controller.js";

const teacherRouter = express.Router();

//TEACHERS

teacherRouter.get("/", teachersController.getAllTeachers);

// GET single teacher by ID
teacherRouter.get("/:id", teachersController.getTeacherById);

//CREATE new teacher
teacherRouter.post("/", teachersController.createTeacher);

// UPDATE an existing teacher
teacherRouter.put("/:id", teachersController.updateTeacher);

// DELETE single teacher
teacherRouter.delete("/:id", teachersController.deleteTeacher);

export default teacherRouter;
