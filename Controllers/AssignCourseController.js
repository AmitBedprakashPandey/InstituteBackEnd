const Enrollment = require("../Model/AssignCourseModel");

// Create a new enrollment
const createEnrollment = async (req, res) => {
  try {
    const data = new Enrollment(req.body)
    const enrollment = await Enrollment.create(data);
    res.status(201).json({ message: "Created Succesfully", data: enrollment });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all enrollments
const getAllEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.find();
    res.status(200).json(enrollments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single enrollment by ID
const getEnrollmentById = async (req, res) => {
  try {
    const enrollment = await Enrollment.find({userid : req.params.id});
    if (!enrollment) {
      return res.status(404).json({ message: "Enrollment not found" });
    }
    res.status(200).json(enrollment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an enrollment by ID
const updateEnrollmentById = async (req, res) => {
  try {
    const enrollment = await Enrollment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!enrollment) {
      return res.status(404).json({ message: "Enrollment not found" });
    }
    res.status(200).json({ message: "Update Succesfully", data: enrollment });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an enrollment by ID
const deleteEnrollmentById = async (req, res) => {
  try {
    const enrollment = await Enrollment.findByIdAndDelete(req.params.id);
    if (!enrollment) {
      return res.status(404).json({ message: "Enrollment not found" });
    }
    res
      .status(200)
      .json({
        message: "Enrollment deleted successfully",
        data: enrollment._id,
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createEnrollment,
  getAllEnrollments,
  getEnrollmentById,
  updateEnrollmentById,
  deleteEnrollmentById,
};
