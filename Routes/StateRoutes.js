const express = require("express");
const router = express.Router();
const controller = require("../Controllers/StateController");

// Create a new enrollment
router.post("/state", controller.createState);

// Get all state
router.get("/state", controller.getAllState);

// Get a single enrollment by ID
router.get("/state/:id", controller.getStateById);

// Update an enrollment by ID
router.put("/state/:id", controller.updateStateById);

// Delete an enrollment by ID
router.delete("/state/:id", controller.deleteStateById);

module.exports = router;
