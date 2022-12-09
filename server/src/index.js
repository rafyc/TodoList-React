require("./models/User");
require("./models/Task");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const requireAuth = require("./middlewares/requireAuth");

const app = express();
app.use(bodyParser.json());
app.use(authRoutes);
app.use(taskRoutes);

const mongoUri =
  "mongodb+srv://rafyc:benbub@cluster0.zhcxdgw.mongodb.net/test";
mongoose.connect(mongoUri);

mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});

mongoose.connection.on("error", (err) => {
  console.error("Error connecting to mongo", err);
});

app.get("/", requireAuth, (req, res) => {
  res.send(
    `Welcome to the ToDo App, ${req.user.username ? req.user.username : req.user.email
    }`
  );
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
