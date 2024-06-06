const express = require("express");
const router = express.Router();
const controller = require("../Controllers/PaymentModecomtroller");

// Create a new enrollment
router.post("/paymentmode", controller.createPaymentMode);

// Get all gender
router.get("/paymentmode", controller.getAllPaymentMode);

// Get a single enrollment by ID
router.get("/paymentmode/:id", controller.getPaymentModeById);

// Update an enrollment by ID
router.put("/paymentmode/:id", controller.updatePaymentModeById);

// Delete an enrollment by ID
router.delete("/paymentmode/:id", controller.deletePaymentModeById);

module.exports = router;
