const Model = require("../Model/FounCourseModel");

// Create a new Foundation
const createFoundation = async (req, res) => {
  try {
    const data = new Model(req.body);
    const Foundation = await Model.create(data);
    res.status(200).json({ message: "Create Sucessfully", data: Foundation });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Foundations
const getAllFoundation = async (req, res) => {
  try {
    const Foundations = await Model.find();
    res.json(Foundations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single Foundation by ID
const getFoundationById = async (req, res) => {
  try {
    const Foundation = await Model.findOne({ userid: req.params.id });
    if (!Foundation) {
      return res.status(404).json({ message: "Model not found" });
    }
    res.status(200).json({ data: [Foundation] });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a Foundation by ID
const updateFoundationById = async (req, res) => {
  try {
    const Foundation = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!Foundation) {
      return res.status(404).json({ message: "Model not found" });
    }
    res.status(200).json({ message: "Update Sucessfully", data: Foundation });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a Foundation by ID
const deleteFoundationById = async (req, res) => {
  try {
    const Foundation = await Model.findByIdAndDelete(req.params.id);
    if (!Foundation) {
      return res.status(404).json({ message: "Model not found" });
    }
    res.json({ message: "Model deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a Foundation by ID
const FoundationByIdStatus = async (req, res) => {
  try {
    const Foundation = await Model.findByIdAndUpdate(
      { _id: req.params.status },
      { status: req.body.status }
    );
    res.status(200).json({
      data: { _id: Foundation._id, status: Foundation.status },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createFoundation,
  getAllFoundation,
  getFoundationById,
  updateFoundationById,
  deleteFoundationById,
  FoundationByIdStatus,
};
