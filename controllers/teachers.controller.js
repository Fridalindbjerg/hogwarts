import * as teachersRepository from "../repositories/teachers.repository.js";

export async function getAllTeachers(req, res) {
  try {
    const allTeachers = await teachersRepository.getAllTeachers();
    res.json(allTeachers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error", code: err.code });
  }
}

export async function getTeacherById(req, res) {
  try {
    const id = req.params.id;
    const teacher = await teachersRepository.getTeacherById(id);

    if (teacher) {
      res.status(200).json(teacher);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
}

// fortæl controller om hvad teacher indeholder = body
// hvis det virker: returner den oprettede lærer
//hvis ikke, smid status 500, database error
export async function createTeacher(req, res) {
  try {
    const teacher = req.body;
    const result = await teachersRepository.createTeacher(teacher);
    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
}

// repo kender ikke 404, så den skal vi bruge her, hvis svaret er null og ikke et object
export async function updateTeacher(req, res) {
  try {
    const teacher = req.body;
    const id = req.params.id;
    const result = await teachersRepository.updateTeacher(teacher, id);

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

export async function deleteTeacher(req, res) {
  try {
    const id = req.params.id;
    const result = await teachersRepository.deleteTeacher(id);

    if (result.rowCount === 0) return res.sendStatus(404);
    else {
      res.sendStatus(204);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
}
