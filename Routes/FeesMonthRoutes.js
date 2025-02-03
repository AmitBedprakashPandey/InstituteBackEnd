const express = require("express");
const router = express.Router();
const controller = require("../Controllers/FeesMonthController");

// // Create a new student
router.post("/feesmonth", controller.createFeesMonth);

// // Get a single student by ID
router.get("/feesmonth/:id/:studentid", controller.getFeesMonthById);

// // Update a student by ID
router.put("/feesmonth/:id", controller.updateFeesMonth);

module.exports = router;
