const express = require("express");
const router = express.Router();
const controller = require("../Controllers/SchoolController");

// Create a new enrollment
router.post("/school", controller.createSchool);

// Get all School
router.get("/school", controller.getAllSchool);

// Get a single enrollment by ID
router.get("/school/:id", controller.getSchoolById);

// Update an enrollment by ID
router.put("/school/:id", controller.updateSchoolById);

// Delete an enrollment by ID
router.delete("/school/:id", controller.deleteSchoolById);

module.exports = router;
