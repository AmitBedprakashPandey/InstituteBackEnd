const Model = require("../Model/FeesModel");

// Create a new student
const createFees = async (req, res) => {
  try {
    const data = new Model(req.body);
    const student = await Model.create(data);
    res.status(200).json({ message: "Create Sucessfully", data: student });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all students
const getAllFees = async (req, res) => {
  try {
    const students = await Model.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single student by ID
const getFeesById = async (req, res) => {
  try {
    const student = await Model.find({ userid: req.params.id });
    if (!student) {
      return res.status(404).json({ message: "Model not found" });
    }
    res.status(200).json({ data: student });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a student by ID
const updateFeesById = async (req, res) => {
  try {
    const data = new Model(req.body);
    const student = await Model.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });
    if (!student) {
      return res.status(404).json({ message: "Model not found" });
    }
    res.status(200).json({ message: "Update Sucessfully", data: student });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a student by ID
const deleteFeesById = async (req, res) => {
  try {
    const student = await Model.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).json({ message: "Model not found" });
    }
    res.json({ message: "Model deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a student by ID
const FeesByIdStatus = async (req, res) => {
  try {
    const student = await Model.findByIdAndUpdate(
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

const findBalanceAmtbyStudentName = async (req, res) => {
  try {
    const { studentname, userid } = req.params;
    console.log(studentname, userid);
    const data = await Model.find({
      studentname: studentname,
      userid: userid,
    });
    console.log(data);
    if (!data || data.length === 0) {
      return res.status(404).json({ message: "No records found" });
    }

    const paidAmt = data?.reduce((acc, item) => acc + item.paidAmt, 0);
    console.log(paidAmt);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createFees,
  getAllFees,
  getFeesById,
  updateFeesById,
  deleteFeesById,
  FeesByIdStatus,
  findBalanceAmtbyStudentName,
};
