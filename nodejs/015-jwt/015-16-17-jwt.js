const express = require("express");
const app = express();
require("dotenv").config();

const db = require("./db");
require("./passport");
const usersRouter = require("./usersRouter");
const planetsRouter = require("./planetsRouter");

const PORT = parseInt(process.env.PORT) || 3000;
app.set("db", db);
app.use(express.json());
app.use("/users", usersRouter);
app.use("/planets", planetsRouter);

app.listen(PORT, async () => {
  console.log("App is running on " + PORT);
});
