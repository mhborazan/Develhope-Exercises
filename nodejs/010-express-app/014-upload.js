const express = require("express");
const app = express();
require("dotenv").config();
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ dest: "uploads/", storage: storage });
const pg = require("pg-promise")();
const {
  getAll,
  getOneById,
  create,
  updateById,
  deleteById,
  uploadImage,
} = require("./controllers/planets-upload");

const db = pg("postgresql://postgres:781379@localhost:5432/planets");

const setupdb = async function () {
  let res = await db.none(
    `DROP TABLE IF EXISTS planets;
    CREATE TABLE IF NOT EXISTS planets(
      id SERIAL NOT NULL PRIMARY KEY,
      name TEXT NOT NULL,
      image TEXT
    );`
  );
  await db.none(`INSERT INTO planets(name) VALUES ($1)`, "Earth");
  await db.none(`INSERT INTO planets(name) VALUES ($1)`, "Saturn");
};
const PORT = parseInt(process.env.PORT) || 5000;
app.set("db", db);
app.use(express.json());
const router = express.Router();
router.use((req, res, next) => {
  //Passing DB to Request, so we can use it inside controllers
  req.db = req.app.get("db");
  next();
});

router.get("/", getAll);
router.get("/:id", getOneById);
router.post("/", create);
router.put("/:id", updateById);
router.delete("/:id", deleteById);
router.post("/image/:id", upload.single("photo"), uploadImage);

app.use("/api/planets", router);
app.listen(PORT, async () => {
  await setupdb();
  console.log("Server Is Running on port " + PORT);
});
