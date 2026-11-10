import * as studentsRepository from "../repositories/students.repository.js";

// GET all students
export async function getAllStudents(req, res) {
  const allStudents = await studentsRepository.getAllStudents();
  res.json(allStudents);
}

// GET single student by ID
export async function singleStudent(req, res) {
  const id = req.params.id;
  const student = await studentsRepository.getStudentById(id);

  if (student) {
    res.status(200).json(student);
  } else {
    res.sendStatus(404);
  }
}

// // CREATE new student
export async function createStudent(req, res) {
  const student = req.body;
  const result = await studentsRepository.createStudent(student);
  res.json(result);
}

export async function updateStudent(req, res) {
  const student = req.body;
  const id = req.params.id;
  const result = await studentsRepository.updateStudent(student, id);

  if (result) {
    res.status(200).json(result);
  } else {
    res.sendStatus(404);
  }
}

export async function deleteStudent(req, res) {
  const id = req.params.id;
  const result = await studentsRepository.deleteStudent(id);

  if (result.rowCount === 0) return res.sendStatus(404);
  else {
    res.sendStatus(204);
  }
}
