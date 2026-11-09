import { pool } from "../db.js";

export async function getAllStudents() {
  const result = await pool.query("SELECT * FROM students");
  console.log(result);
  return result.rows;
}

export async function getStudentById(id) {
  const result = await pool.query("SELECT * FROM students WHERE id = $1", [id]);
  if (result.rowCount === 0) {
    return null;
  } else {
    return result.rows[0];
  }
}

// pseudo: insert i tabel. return row [0] (1)
export async function createStudent(student) {
  const result = await pool.query(
    "INSERT INTO students (name, year, house) VALUES ($1, $2, $3) RETURNING name, year, house",
    [student.name, student.year, student.house],
  );
  return result.rows[0];
}

export async function updateStudent(student, id) {
  const result = await pool.query(
    "UPDATE teachers SET name = $1, year = $2 house = $3 WHERE id = $4 RETURNING name, year, house, id",
    [student.name, student.year, student.house, id],
  );
  if (result.rowCount === 0) {
    return null;
  } else {
    return result.rows[0];
  }
}

export async function deleteStudent(id) {
  const result = await pool.query("DELETE FROM students WHERE id = $1", [id]);
  if (result.rowCount === 0) {
    return null;
  } else {
    return true;
  }
}
