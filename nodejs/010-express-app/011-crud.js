const express = require("express");
require("dotenv").config();
const planets = require("./db.js");
const app = express();
const port = process.env.PORT;

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
  if (req.body.id && req.body.name) {
    planets.push({ id: req.body.id, name: req.body.name });
    res.status(201).json({
      status: 201,
      //planets: planets,
    });
  } else {
    res.json({ status: "rejected" });
  }
});

app.put("/api/planets/:id", (req, res) => {
  if (planets.findIndex((e) => e.id === parseInt(req.params.id)) !== -1) {
    if (req.body.name) {
      planets[planets.findIndex((e) => e.id === parseInt(req.params.id))] = {
        id: parseInt(req.params.id),
        name: req.body.name,
      };
      res.json({
        status: 200,
        planets: planets,
      });
    } else {
      res.json({ status: "rejected" });
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
