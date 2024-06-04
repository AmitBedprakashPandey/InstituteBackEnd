const express = require('express');
const router = express.Router();
const studentController = require('../Controllers/AdmissionController');

// Create a new student
router.post('/students',  studentController.createStudent);

// Get all students
router.get('/students', studentController.getAllStudents);

// Get a single student by ID
router.get('/students/:id', studentController.getStudentById);

// Update a student by ID
router.put('/students/:id', studentController.updateStudentById);
router.put('/students/:status', studentController.StudentByIdStatus);

// Delete a student by ID
router.delete('/students/:id', studentController.deleteStudentById);

module.exports = router;
