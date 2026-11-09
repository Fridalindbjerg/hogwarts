import express from "express";
import houseRouter from "./Routers/houses.router.js";
import teacherRouter from "./Routers/teachers.router.js";
import studentRouter from "./Routers/students.router.js";
import courseRouter from "./Routers/courses.router.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello World"));

//HOUSES
app.use("/houses/", houseRouter);

//TEACHERS
app.use("/teachers/", teacherRouter);

//STUDENTS

app.use("/students/", studentRouter);

//COURSES
app.use("/courses/", courseRouter);

app.listen(port, () => console.log(`Server kører på http://localhost:${port}`));
