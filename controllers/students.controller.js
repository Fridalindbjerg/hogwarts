import * as studentsRepository from "../repositories/students.repository.js";

// GET all students
export async function getAllStudents(req, res) {
  try {
    const allStudents = await studentsRepository.getAllStudents();
    res.json(allStudents);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error", code: err.code });
  }
}

// GET single student by ID
export async function singleStudent(req, res) {
  try {
    const id = req.params.id;
    const student = await studentsRepository.getStudentById(id);

    if (student) {
      res.status(200).json(student);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
}

// // CREATE new student
export async function createStudent(req, res) {
  try {
    const student = req.body;
    const result = await studentsRepository.createStudent(student);
    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
}

export async function updateStudent(req, res) {
  try {
    const student = req.body;
    const id = req.params.id;
    const result = await studentsRepository.updateStudent(student, id);

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

export async function deleteStudent(req, res) {
  try {
    const id = req.params.id;
    const result = await studentsRepository.deleteStudent(id);

    if (result.rowCount === 0) return res.sendStatus(404);
    else {
      res.sendStatus(204);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
}
