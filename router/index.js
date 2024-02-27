const express = require("express");
const users = require("../src/modules/users/routes/users.router")
const pets = require("../src/modules/pets/routes/pets.router")
const citas = require("../src/modules/citas/routes/citas.router")

const routers = (app) => {
  const baseRoute = express.Router();
  app.use(express.static("public"));
  app.use("/api/v1", baseRoute);
  baseRoute.use("/users", users);
  baseRoute.use("/pets", pets);
  baseRoute.use("/citas", citas);
};

module.exports = routers;
