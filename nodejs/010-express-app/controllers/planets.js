const planets = require("./db.js");
const Joi = require("joi");

const getAll = (req, res) => {
  res.json(planets);
};

const getOneById = (req, res) => {
  const id = Number(req.params.id);
  console.log("Getting Planet : " + id);
  const planet = planets.find((planet) => planet.id === id);

  if (!planet) {
    return res.status(404).send("Planet not found");
  }
  res.json(planet);
};

const create = (req, res) => {
  const newPlanet = {
    id: planets.length + 1,
    name: req.body.name,
  };
  planets = [...planets, newPlanet];
  res.status(201).json(newPlanet);
};

const updateById = (req, res) => {
  const id = Number(req.params.id);
  planets = planets.map((planet) => {
    if (planet.id == id) {
      return { ...planet, name: req.body.name };
    }
    return planet;
  });
  res.status(200).json("Planet updated");
};

const deleteById = (req, res) => {
  const id = Number(req.params.id);
  planets = planets.filter((p) => p.id != id);
  res.status(200).json("Planet deleted");
};

module.exports = {
  getAll,
  getOneById,
  create,
  updateById,
  deleteById,
};
