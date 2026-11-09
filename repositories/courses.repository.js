import { pool } from "../db.js";

export async function getAllCourses() {
  const result = await pool.query("SELECT * FROM courses");
  console.log(result);
  return result.rows;
}

export async function getCourseById(id) {
  const result = await pool.query("SELECT * FROM courses WHERE id = $1", [id]);
  if (result.rowCount === 0) {
    return null;
  } else {
    return result.rows[0];
  }
}

// pseudo: insert i tabel. return row [0] (1)
export async function createCourse(course) {
  const result = await pool.query(
    "INSERT INTO courses (name, teacher, students) VALUES ($1, $2, $3) RETURNING name, teacher, students",
    [course.name, course.teacher, course.students],
  );
  return result.rows[0];
}

export async function updateCourses(course, id) {
  const result = await pool.query(
    "UPDATE courses SET name = $1, teacher = $2, students = $3 WHERE id = $4 RETURNING name, teacher, students, id",
    [course.name, course.teacher, course.students, id],
  );
  if (result.rowCount === 0) {
    return null;
  } else {
    return result.rows[0];
  }
}

export async function deleteCourse(id) {
  const result = await pool.query("DELETE FROM courses WHERE id = $1", [id]);
  if (result.rowCount === 0) {
    return null;
  } else {
    return true;
  }
}

//find course
//hvis ikke findes: null
// hvis findes:
//update teacher
//return row [0] = 1
export async function updateTeacherOnCourse(course, id) {
  const result = await pool.query(
    "UPDATE courses SET teacher = $1 WHERE id = $2 RETURNING teacher, id",
    [course.teacher, id],
  );
  if (result.rowCount === 0) {
    return null;
  } else {
    return result.rows[0];
  }
}

export async function addStudentToCourse(body, id) {
  const result = await pool.query(
    "INSERT INTO courses_students (course, student) VALUES ($1, $2) RETURNING course, student ",
    [id, body.student],
  );
  if (result.rowCount === 0) {
    return null;
  } else {
    return result.rows[0];
  }
}

export async function removeStudentFromCourse(body, id) {
  const result = await pool.query(
    "DELETE FROM courses_students WHERE course = $1 and student = $2 RETURNING course, student",
    [id, body.student],
  );
  if (result.rowCount === 0) {
    return null;
  } else {
    return true;
  }
}
