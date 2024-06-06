const express = require("express");
const router = express.Router();
const controller = require("../Controllers/FoundationControlller");

// Create a new enrollment
router.post("/foundation", controller.createFoundation);

// Get all gender
router.get("/foundation", controller.getAllFoundation);

// Get a single enrollment by ID
router.get("/foundation/:id", controller.getFoundationById);

// Update an enrollment by ID
router.put("/foundation/:id", controller.updateFoundationById);

// Delete an enrollment by ID
router.delete("/foundation/:id", controller.deleteFoundationById);

module.exports = router;
