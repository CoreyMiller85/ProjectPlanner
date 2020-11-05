const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const taskRouter = require("./routes/tasks-router");
const db = require("./db");

const Task = require("./models/task-model");

const app = express();
const apiPort = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/task", taskRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
