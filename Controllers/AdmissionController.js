const Student = require("../Model/AdmissionModel");

// Create a new student
const createStudent = async (req, res) => {
  try {
    const data = new Student(req.body);
    const student = await Student.create(data);    
    res.status(200).json({ message: "Create Sucessfully", data: student });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all students
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single student by ID
const getStudentById = async (req, res) => {
  try {
    const student = await Student.find({ userid: req.params.id });
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a student by ID
const updateStudentById = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json({ message: "Update Sucessfully", data: student });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a student by ID
const deleteStudentById = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a student by ID
const StudentByIdStatus = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      { _id: req.params.status },
      { status: req.body.status }
    );
    res.status(200).json({
      data: { _id: student._id, status: student.status },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudentById,
  deleteStudentById,
  StudentByIdStatus,
};
