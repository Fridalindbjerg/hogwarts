import { pool } from "../db.js";

export async function getAllTeachers() {
  const result = await pool.query("SELECT * FROM teachers");
  console.log(result);
  return result.rows;
}

export async function getTeacherById(id) {
  const result = await pool.query("SELECT * FROM teachers WHERE id = $1", [id]);
  if (result.rowCount === 0) {
    return null;
  } else {
    return result.rows[0];
  }
}

// pseudo: insert i tabel. return row [0] (1)
export async function createTeacher(teacher) {
  const result = await pool.query(
    "INSERT INTO teachers (name, house) VALUES ($1, $2) RETURNING name, house",
    [teacher.name, teacher.house],
  );
  return result.rows[0];
}

// opdatér m sql
// hvis rækken ikke findes: giv null
// hvis rækken findes, giv det nye resultat
export async function updateTeacher(teacher, id) {
  const result = await pool.query(
    "UPDATE teachers SET name = $1, house = $2 WHERE id = $3 RETURNING name, house, id",
    [teacher.name, teacher.house, id],
  );
  if (result.rowCount === 0) {
    return null;
  } else {
    return result.rows[0];
  }
}

//slet hvis id
// man kunne lave find først - men jeg gør ikke
// hvis ingen række, 404 (not found)
// ellers 204 (no content - men positiv fordi i 200-rækken)
export async function deleteTeacher(id) {
  const result = await pool.query("DELETE FROM teachers WHERE id = $1", [id]);
  if (result.rowCount === 0) {
    return null;
  } else {
    return true;
  }
}
