require("dotenv").config();
const express = require("express");
const db = require("./db");
const router = express.Router();
const jwt = require("jsonwebtoken");
const authorize = require("./auth");
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await db.oneOrNone(
    `SELECT * FROM users WHERE username =$1 AND password =$2`,
    [username, password]
  );
  if (user && user.password == password) {
    const { SECRET } = process.env;
    const payload = { id: user.id, username };
    const token = jwt.sign(payload, SECRET);
    await db.none(`UPDATE users SET token=$2 WHERE id=$1`, [user.id, token]);
    res.status(200).json({ id: user.id, username, token });
  } else {
    res.status(400).json({ message: "Invalid username or password" });
  }
});

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const checkUser = await db.oneOrNone(
    `SELECT * FROM users WHERE username=$1`,
    username
  );
  if (checkUser) {
    res.status(400).json({ message: "Username already exists" });
  } else {
    await db.none(`INSERT INTO users(username, password) VALUES($1, $2)`, [
      username,
      password,
    ]);
    res.status(201).json({ message: "User created successfully" });
  }
});

router.get("/logout", authorize, async (req, res) => {
  let user = await req.user;
  console.log(user);
  await db.none("UPDATE users SET token = $2 WHERE id=$1", [user.id, null]);
  res.status(200).json({ msg: "Logout Success" });
});

module.exports = router;
