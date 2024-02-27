const express = require("express");
const pets = require("../services/pets.service");
const router = express.Router();

router.get("/all", pets.getAllPets);

router.get("/byid/:id", pets.getById);

router.post("/create", pets.createPets);

router.put("/update", pets.updatePets);

router.delete("/delete", pets.deletePets);

module.exports = router;
