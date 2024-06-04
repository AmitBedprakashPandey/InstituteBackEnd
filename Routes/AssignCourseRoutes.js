const express = require('express');
const router = express.Router();
const enrollmentController = require('../Controllers/AssignCourseController');

// Create a new enrollment
router.post('/enrollments', enrollmentController.createEnrollment);

// Get all enrollments
router.get('/enrollments', enrollmentController.getAllEnrollments);

// Get a single enrollment by ID
router.get('/enrollments/:id', enrollmentController.getEnrollmentById);

// Update an enrollment by ID
router.put('/enrollments/:id', enrollmentController.updateEnrollmentById);

// Delete an enrollment by ID
router.delete('/enrollments/:id', enrollmentController.deleteEnrollmentById);

module.exports = router;
