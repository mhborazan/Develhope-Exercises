const Joi = require("joi");
const planetSchema = Joi.object({
  id: Joi.number().integer().min(1).max(9999),
  name: Joi.string().min(1).max(40).required(),
  image: Joi.string(),
});
const getAll = async (req, res) => {
  let results = await req.db.manyOrNone("SELECT * FROM planets ");
  res.json(results);
};

const getOneById = async (req, res) => {
  const id = Number(req.params.id);
  let planet = await req.db.oneOrNone("SELECT * FROM planets WHERE id=$1 ", id);
  if (!planet) {
    return res.status(404).send("Planet not found");
  }
  res.json(planet);
};

const create = async (req, res) => {
  let { name } = req.body;
  let validate = planetSchema.validate({ name });
  const { value, error } = validate;
  const valid = error == null;
  if (!valid) {
    res.status(422).json({
      message: "Invalid request",
      data: error.message,
    });
  } else {
    await req.db.none(`INSERT INTO planets(name) VALUES ($1)`, name);
    res.status(201).json({ message: "Planet created", data: value });
  }
};

const updateById = async (req, res) => {
  const id = Number(req.params.id);
  let { name } = req.body;
  let validate = planetSchema.validate({ name });
  const { value, error } = validate;
  const valid = error == null;
  if (!valid) {
    res.status(422).json({
      message: "Invalid request",
      data: error.message,
    });
  } else {
    let result = await req.db.any(
      "UPDATE planets SET name=$2 WHERE id=$1 RETURNING *",
      [id, name]
    );
    res.status(201).json({ message: "Planet Updated", data: result });
  }
};

const deleteById = async (req, res) => {
  const id = Number(req.params.id);
  let result = await req.db.none("DELETE FROM planets  WHERE id=$1", [id]);
  res.status(201).json({ message: "Planet Removed", data: result });
};

const uploadImage = async (req, res) => {
  let { path } = req.file;
  const id = Number(req.params.id);
  let validate = planetSchema.validate({ image: path, name: "a" });
  const { value, error } = validate;
  const valid = error == null;
  if (!valid) {
    res.status(422).json({
      message: "Invalid request",
      data: error.message,
    });
  } else {
    let result = await req.db.any(
      "UPDATE planets SET image=$2 WHERE id=$1 RETURNING *",
      [id, path]
    );
    result.path = path;
    res.status(201).json({ message: "Planet Updated", data: result });
  }
};
module.exports = {
  getAll,
  getOneById,
  create,
  updateById,
  deleteById,
  uploadImage,
};
