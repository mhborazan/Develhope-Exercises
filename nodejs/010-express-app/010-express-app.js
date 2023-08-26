const express = require("express");
require("dotenv").config();
const planets = require("./db.js");
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.post("/", function (request, response) {
  response.send(request.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
