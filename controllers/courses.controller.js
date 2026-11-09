import * as coursesRepository from "../repositories/courses.repository.js";

// GET all courses
export async function getAllCourses(req, res) {
  try {
    const allCourses = await coursesRepository.getAllCourses();
    res.json(allCourses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error", code: err.code });
  }
}

// GET single course by ID
export async function getSingleCourse(req, res) {
  try {
    const id = req.params.id;
    const course = await coursesRepository.getCourseById(id);

    if (course) {
      res.status(200).json(course);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
}

// CREATE new course
export async function createCourse(req, res) {
  try {
    const course = req.body;
    const result = await coursesRepository.createCourse(course);
    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
}

export async function updateCourse(req, res) {
  try {
    const course = req.body;
    const id = req.params.id;
    const result = await coursesRepository.updateCourses(course, id);

    if (result) {
      res.status(200).json(result);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
}

export async function deleteCourse(req, res) {
  try {
    const id = req.params.id;
    const result = await coursesRepository.deleteCourse(id);

    if (result.rowCount === 0) return res.sendStatus(404);
    else {
      res.sendStatus(204);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
}

export async function updateTeacherOnCourse(req, res) {
  try {
    const course = req.body;
    const id = req.params.id;
    const result = await coursesRepository.updateTeacherOnCourse(course, id);

    if (result) {
      res.status(200).json(result);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
}
