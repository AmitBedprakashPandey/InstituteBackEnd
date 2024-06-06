const Model = require("../Model/GenderModel");

// Create a new gender
const creategender = async (req, res) => {
  try {
    const data = new Model(req.body);
    const gender = await Model.create(data);
    res.status(200).json({ message: "Create Sucessfully", data: gender });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all genders
const getAllgender = async (req, res) => {
  try {
    const genders = await Model.find();
    res.json(genders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single gender by ID
const getgenderById = async (req, res) => {
  try {
    const gender = await Model.findOne({ userid: req.params.id });
    if (!gender) {
      return res.status(404).json({ message: "Model not found" });
    }
    res.status(200).json({ data: [gender] });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a gender by ID
const updategenderById = async (req, res) => {
  try {
    const gender = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!gender) {
      return res.status(404).json({ message: "Model not found" });
    }
    res.status(200).json({ message: "Update Sucessfully", data: gender });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a gender by ID
const deletegenderById = async (req, res) => {
  try {
    const gender = await Model.findByIdAndDelete(req.params.id);
    if (!gender) {
      return res.status(404).json({ message: "Model not found" });
    }
    res.json({ message: "Model deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a gender by ID
const genderByIdStatus = async (req, res) => {
  try {
    const gender = await Model.findByIdAndUpdate(
      { _id: req.params.status },
      { status: req.body.status }
    );
    res.status(200).json({
      data: { _id: gender._id, status: gender.status },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  creategender,
  getAllgender,
  getgenderById,
  updategenderById,
  deletegenderById,
  genderByIdStatus,
};
