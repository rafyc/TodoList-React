const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = mongoose.model("User");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = new User({ username, email, password });
    await user.save();

    const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY");
    res.send({ token });
  } catch (err) {
    res.status(422).send(err.message);
  }
});

router.post("/signin", async (req, res) => {
  const { id, password } = req.body;
  if (!id || !password) {
    return res.status(422).send({ error: "Must provide all credentials" });
  }

  let user = await User.findOne({ username: id });
  if (!user) {
    user = await User.findOne({ email: id });
  }
  if (!user) {
    return res.status(422).send({ error: "Invalid credentials" });
  }

  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY");
    res.send({ token });
  } catch (err) {
    return res.status(422).send({ error: "Invalid credentials" });
  }
});

module.exports = router;
