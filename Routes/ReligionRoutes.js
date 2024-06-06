const express = require("express");
const router = express.Router();
const controller = require("../Controllers/ReligionController");

// Create a new enrollment
router.post("/religion", controller.createReligion);

// Get all Religion
router.get("/religion", controller.getAllReligion);

// Get a single enrollment by ID
router.get("/religion/:id", controller.getReligionById);

// Update an enrollment by ID
router.put("/religion/:id", controller.updateReligionById);

// Delete an enrollment by ID
router.delete("/religion/:id", controller.deleteReligionById);

module.exports = router;
