import * as teachersRepository from "../repositories/teachers.repository.js";

export async function getAllTeachers(req, res) {
  const allTeachers = await teachersRepository.getAllTeachers();
  res.json(allTeachers);
}

export async function getTeacherById(req, res) {
  const id = req.params.id;
  const teacher = await teachersRepository.getTeacherById(id);

  if (!teacher) {
    // res.sendStatus(404);
    throw new Error("teacher not found");
  } else {
    res.status(200).json(teacher);
  }
}

// fortæl controller om hvad teacher indeholder = body
// hvis det virker: returner den oprettede lærer
//hvis ikke, smid status 500, database error
export async function createTeacher(req, res) {
  const teacher = req.body;
  const result = await teachersRepository.createTeacher(teacher);
  res.json(result);
}

// repo kender ikke 404, så den skal vi bruge her, hvis svaret er null og ikke et object
export async function updateTeacher(req, res) {
  const teacher = req.body;
  const id = req.params.id;
  const result = await teachersRepository.updateTeacher(teacher, id);

  if (result) {
    res.status(200).json(result);
  } else {
    res.sendStatus(404);
  }
}

export async function deleteTeacher(req, res) {
  const id = req.params.id;
  const result = await teachersRepository.deleteTeacher(id);

  if (result.rowCount === 0) return res.sendStatus(404);
  else {
    res.sendStatus(204);
  }
}
