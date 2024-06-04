const express = require("express");
const router = express.Router();
const enquiryController = require("../Controllers/EnquiryController");

// Create a new enquiry
router.post("/enquiry", enquiryController.createEnquiry);

// Get all enquiry
// router.get("/enquiry", enquiryController.getAllEnquirys);

// Get a single enquiry by ID
router.get("/enquiry/:id", enquiryController.getEnquiryById);

// Update a enquiry by ID
router.put("/enquiry/:id", enquiryController.updateEnquiryById);

// Delete a enquiry by ID
router.delete("/enquiry/:id", enquiryController.deleteEnquiryById);

module.exports = router;
