const express = require("express");
const app = express();
require("dotenv").config();
const pg = require("pg-promise")();
const {
  getAll,
  getOneById,
  create,
  updateById,
  deleteById,
} = require("./controllers/planets-postgres");

const db = pg("postgresql://postgres:781379@localhost:5432/planets");

const setupdb = async function () {
  let res = await db.none(
    `DROP TABLE IF EXISTS planets;
    CREATE TABLE IF NOT EXISTS planets(
      id SERIAL NOT NULL PRIMARY KEY,
      name TEXT NOT NULL
    );`
  );
  await db.none(`INSERT INTO planets(name) VALUES ($1)`, "Earth");
  await db.none(`INSERT INTO planets(name) VALUES ($1)`, "Mars");
};
const PORT = parseInt(process.env.PORT) || 3000;
app.set("db", db);
app.use(express.json());
const router = express.Router();
router.use((req, res, next) => {
  req.db = req.app.get("db");
  next();
});

router.get("/", getAll);
router.get("/:id", getOneById);
router.post("/", create);
router.put("/:id", updateById);
router.delete("/:id", deleteById);

app.use("/api/planets", router);
app.listen(PORT, async () => {
  await setupdb();
  console.log("App is listening on " + PORT);
});
