const express = require("express");
const router = express.Router();
const upload = require("./multer.config");
const {
  getAll,
  getOneById,
  create,
  updateById,
  deleteById,
  uploadImage,
} = require("./planets-upload");

router.use((req, res, next) => {
  req.db = req.app.get("db");
  next();
});

router.get("/", getAll);
router.get("/:id", getOneById);
router.post("/", create);
router.put("/:id", updateById);
router.delete("/:id", deleteById);
router.post("/image/:id", upload.single("photo"), uploadImage);
module.exports = router;
