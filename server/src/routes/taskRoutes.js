const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require("../middlewares/requireAuth");

const Task = mongoose.model("Task");

const router = express.Router();
router.use(requireAuth);

router.get("/tasks", async (req, res) => {
  const tasks = await Task.find({ userid: req.user._id }).catch((err) =>
    res.status(422).send({ error: err.message })
  );
  res.send(tasks);
});

router.post("/tasks", async (req, res) => {
  const { name, description, category, dueDate, subTasks, finished } = req.body;

  if (!name) {
    return res.status(422).send({ error: "You must provide a name" });
  }

  try {
    const task = new Task({
      userId: req.user._id,
      name,
      description,
      category,
      dueDate,
      subTasks,
      finished,
    });
    await task.save();
    res.send(task);
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

router.delete("/tasks/:id", async (req, res) => {
  await Task.deleteOne({ _id: req.params.id }).then(() =>
    res.send("Successfully deleted")
  );
});

router.patch("/tasks/:id", async (req, res) => {
  const { name, description, category, dueDate, subTasks, finished } = req.body;
  await Task.findOneAndUpdate(
    { _id: req.params.id },
    { name, description, category, dueDate, subTasks, finished }
  )
    .then(() => res.send("Successfully updated"))
    .catch((err) => res.status(422).send("Could not update task"));
});

module.exports = router;
