import express from "express";
import * as coursesController from "../controllers/courses.controller.js";

const coursesRouter = express.Router();

//courses

// GET all courses
coursesRouter.get("/", coursesController.getAllCourses);

// // GET single course by ID
coursesRouter.get("/:id", coursesController.getSingleCourse);

// CREATE single Course
coursesRouter.post("/", coursesController.createCourse);

// UPDATE single Course
coursesRouter.put("/:id", coursesController.updateCourse);

// DELETE single Course
coursesRouter.delete("/:id", coursesController.deleteCourse);

// UPDATE teacher on course
coursesRouter.put("/:id/teacher", coursesController.updateTeacherOnCourse);

// UPDATE add student to course
coursesRouter.put("/:id/teacher", coursesController.updateTeacherOnCourse);

export default coursesRouter;
