import * as coursesRepository from "../repositories/courses.repository.js";

// GET all courses
export async function getAllCourses(req, res) {
  const allCourses = await coursesRepository.getAllCourses();
  res.json(allCourses);
}

// GET single course by ID
export async function getSingleCourse(req, res) {
  const id = req.params.id;
  const course = await coursesRepository.getCourseById(id);

  if (course) {
    res.status(200).json(course);
  } else {
    res.sendStatus(404);
  }
}

// CREATE new course
export async function createCourse(req, res) {
  const course = req.body;
  const result = await coursesRepository.createCourse(course);
  res.json(result);
}

//UPDATE course
export async function updateCourse(req, res) {
  const course = req.body;
  const id = req.params.id;
  const result = await coursesRepository.updateCourses(course, id);

  if (result) {
    res.status(200).json(result);
  } else {
    res.sendStatus(404);
  }
}

//Delete course
export async function deleteCourse(req, res) {
  const id = req.params.id;
  const result = await coursesRepository.deleteCourse(id);

  if (result.rowCount === 0) return res.sendStatus(404);
  else {
    res.sendStatus(204);
  }
}

//UPDATE teacher on course
export async function updateTeacherOnCourse(req, res) {
  const course = req.body;
  const id = req.params.id;
  const result = await coursesRepository.updateTeacherOnCourse(course, id);

  if (result) {
    res.status(200).json(result);
  } else {
    res.sendStatus(404);
  }
}

export async function addStudentToCourse(req, res) {
  const body = req.body;
  const id = req.params.id;
  const result = await coursesRepository.addStudentToCourse(body, id);

  if (result) {
    res.status(200).json(result);
  } else {
    res.sendStatus(404);
  }
}

export async function removeStudentFromCourse(req, res) {
  const id = req.params.id;
  const body = req.body;
  const result = await coursesRepository.removeStudentFromCourse(body, id);

  if (result.rowCount === 0) return res.sendStatus(404);
  else {
    res.sendStatus(204);
  }
}
