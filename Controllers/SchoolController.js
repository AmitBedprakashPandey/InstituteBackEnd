;
const Model = require("../Model/SchoolModel");

// Create a new School
const createSchool = async (req, res) => {
  try {
    console.log("from" ,req.body);
    const data = new Model(req.body);
    const School = await Model.create(data);
    console.log(School);
    res.status(200).json({ message: "Create Sucessfully", data: School });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Schools
const getAllSchool = async (req, res) => {
  try {
    const Schools = await Model.find();
    res.json(Schools);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single School by ID
const getSchoolById = async (req, res) => {
  try {
    const School = await Model.findOne({ userid: req.params.id });
    if (!School) {
      return res.status(404).json({ message: "Model not found" });
    }
    res.status(200).json([School]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a School by ID
const updateSchoolById = async (req, res) => {
  try {
    const data = new Model(req.body)
    const School = await Model.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });
    if (!School) {
      return res.status(404).json({ message: "Model not found" });
    }
    res.status(200).json({ message: "Update Sucessfully", data: School });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a School by ID
const deleteSchoolById = async (req, res) => {
  try {
    const School = await Model.findByIdAndDelete(req.params.id);
    if (!School) {
      return res.status(404).json({ message: "Model not found" });
    }
    res.json({ message: "Model deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a School by ID
const SchoolByIdStatus = async (req, res) => {
  try {
    const School = await Model.findByIdAndUpdate(
      { _id: req.params.status },
      { status: req.body.status }
    );
    res.status(200).json({
      data: { _id: School._id, status: School.status },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createSchool,
  getAllSchool,
  getSchoolById,
  updateSchoolById,
  deleteSchoolById,
  SchoolByIdStatus,
};
