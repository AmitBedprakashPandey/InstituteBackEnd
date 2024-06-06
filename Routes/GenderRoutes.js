const express = require("express");
const router = express.Router();
const controller = require("../Controllers/GenderController");

// Create a new enrollment
router.post("/gender", controller.creategender);

// Get all gender
router.get("/gender", controller.getAllgender);

// Get a single enrollment by ID
router.get("/gender/:id", controller.getgenderById);

// Update an enrollment by ID
router.put("/gender/:id", controller.updategenderById);

// Delete an enrollment by ID
router.delete("/gender/:id", controller.deletegenderById);

module.exports = router;
