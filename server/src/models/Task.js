const mongoose = require("mongoose");

const subTaskSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  finished: {
    type: Boolean,
    default: false,
  },
});

const taskSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
  description: String,
  dueDate: String,
  subTasks: [subTaskSchema],
  finished: {
    type: Boolean,
    default: false,
  },
});

mongoose.model("Task", taskSchema);
