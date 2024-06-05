const express = require("express");
const router = express.Router();
const controller = require("../Controllers/CourseTypeController");

// Create a new student
router.post("/coursetype", controller.createCourseType);

// Get all coursetype
router.get("/coursetype", controller.getAllCourseTypes);

// Get a single student by ID
router.get("/coursetype/:id", controller.getCourseTypeById);

// Update a student by ID
router.put("/coursetype/:id", controller.updateCourseType);

// Delete a student by ID
router.delete("/coursetype/:id", controller.deleteCourseType);

module.exports = router;
