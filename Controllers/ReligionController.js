const Model = require("../Model/ReligionModel");

// Create a new Religion
const createReligion = async (req, res) => {
  try {
    const data = new Model(req.body);
    const Religion = await Model.create(data);    
    res.status(200).json({ message: "Create Sucessfully", data: Religion });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Religions
const getAllReligion = async (req, res) => {
  try {
    const Religions = await Model.find();
    res.json(Religions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single Religion by ID
const getReligionById = async (req, res) => {
  try {
    const Religion = await Model.findOne({ userid: req.params.id });
    if (!Religion) {
      return res.status(404).json({ message: "Model not found" });
    }
    res.status(200).json({ data: [Religion] });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a Religion by ID
const updateReligionById = async (req, res) => {
  try {
    const Religion = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!Religion) {
      return res.status(404).json({ message: "Model not found" });
    }
    res.status(200).json({ message: "Update Sucessfully", data: Religion });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a Religion by ID
const deleteReligionById = async (req, res) => {
  try {
    const Religion = await Model.findByIdAndDelete(req.params.id);
    if (!Religion) {
      return res.status(404).json({ message: "Model not found" });
    }
    res.json({ message: "Model deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a Religion by ID
const ReligionByIdStatus = async (req, res) => {
  try {
    const Religion = await Model.findByIdAndUpdate(
      { _id: req.params.status },
      { status: req.body.status }
    );
    res.status(200).json({
      data: { _id: Religion._id, status: Religion.status },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createReligion,
  getAllReligion,
  getReligionById,
  updateReligionById,
  deleteReligionById,
  ReligionByIdStatus,
};
