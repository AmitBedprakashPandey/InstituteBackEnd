const express = require("express");
const router = express.Router();
const feesController = require("../Controllers/FeesController");

// Create a new fees
router.post("/fees", feesController.createFees);

// Get all feess
router.get("/fees", feesController.getAllFees);

// Get a single fees by ID
router.get("/fees/:id", feesController.getFeesById);

// Update a fees by ID
router.put("/fees/:id", feesController.updateFeesById);

// Status
router.put("/fees/:status", feesController.FeesByIdStatus);

// Delete a fees by ID
router.delete("/fees/:id", feesController.deleteFeesById);

module.exports = router;
