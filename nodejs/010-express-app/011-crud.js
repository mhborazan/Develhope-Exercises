const express = require("express");
require("dotenv").config();
const planets = require("./db.js");
const app = express();
const port = process.env.PORT;
const Joi = require("joi");

const planetSchemaWithId = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().min(4).required(),
});
const planetSchema = Joi.object({
  name: Joi.string().min(4).required(),
});

app.use(express.json());

app.post("/", function (request, response) {
  response.send(request.body);
});

app.get("/api/planets", (req, res) => {
  res.json({
    status: 200,
    planets: planets,
  });
});

app.get("/api/planets/:id", (req, res) => {
  res.json({
    status: 200,
    planet: planets.find((e) => e.id === parseInt(req.params.id)),
  });
});

app.post("/api/planets", (req, res) => {
  const { error, value } = planetSchemaWithId.validate(req.body);
  if (!error) {
    planets.push({ id: req.body.id, name: req.body.name });
    res.status(201).json({
      status: 201,
      planets: planets,
    });
  } else {
    res.json({ error: error });
  }
});

app.put("/api/planets/:id", (req, res) => {
  const { error, value } = planetSchema.validate(req.body);
  if (planets.findIndex((e) => e.id === parseInt(req.params.id)) !== -1) {
    if (!error) {
      planets[planets.findIndex((e) => e.id === parseInt(req.params.id))] = {
        id: parseInt(req.params.id),
        name: req.body.name,
      };
      res.json({
        status: 200,
        planets: planets,
      });
    } else {
      res.json({ error: error });
    }
  } else {
    res.json({ status: "id not exist" });
  }
});

app.delete("/api/planets/:id", (req, res) => {
  if (planets.findIndex((e) => e.id === parseInt(req.params.id)) !== -1) {
    planets.splice(
      planets.findIndex((e) => e.id === parseInt(req.params.id)),
      1
    );
    res.json({
      status: 200,
      message: "Successfully Deleted",
      // planets: planets,
    });
  } else {
    res.json({ status: "id not exist" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
