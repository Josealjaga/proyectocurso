const express = require("express");
const citas = require("../services/citas.service");
const router = express.Router();

router.get("/all", citas.getAllCitas);

router.get("/byid/:id", citas.getById);

router.post("/create", citas.createCitas);

router.put("/update", citas.updateCitas);

router.delete("/delete", citas.deleteCitas);

module.exports = router;

