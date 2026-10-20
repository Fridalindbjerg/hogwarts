const express = require("express");
const pool = require("./db");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello World"));

//GET all teachers
app.get("/teachers", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM teachers");
    console.log(result);

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error", code: err.code });
  }
});

// GET single teacher by ID
app.get("/teachers/:id", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM teachers WHERE id = $1", [
      req.params.id,
    ]);
    if (result.rowCount === 0) return res.sendStatus(404);

    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
});

//CREATE new teacher
app.post("/teachers", async (req, res) => {
  const teacher = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO teachers (name, house) VALUES ($1, $2) RETURNING name, house",
      [teacher.name, teacher.house],
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
});

// UPDATE an existing teacher
app.put("/teachers/:id", async (req, res) => {
  const teacher = req.body;
  const id = req.params.id;

  try {
    const result = await pool.query(
      "UPDATE teachers SET name = $1, house = $2 WHERE id = $3 RETURNING name, house, id",
      [teacher.name, teacher.house, id],
    );

    if (result.rowCount === 0) return res.sendStatus(404);

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
});

// DELETE single teacher
app.delete("/teachers/:id", async (req, res) => {
  try {
    const del = await pool.query("DELETE FROM teachers WHERE id = $1", [
      req.params.id,
    ]);

    if (del.rowCount === 0) return res.sendStatus(404);

    res.sendStatus(204);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
});

app.listen(port, () => console.log(`Server kører på http://localhost:${port}`));
