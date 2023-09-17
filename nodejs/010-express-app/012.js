const express = require("express");
const app = express();
require("dotenv").config();

const {
  getAll,
  getOneById,
  create,
  updateById,
  deleteById,
} = require("./controllers/planets");
const PORT = parseInt(process.env.PORT) || 3000;

app.use(express.json());
const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOneById);
router.post("/", create);
router.put("/:id", updateById);
router.delete("/:id", deleteById);

app.use("/api/planets", router);
app.listen(PORT, () => {
  console.log("App is listening " + PORT);
});
