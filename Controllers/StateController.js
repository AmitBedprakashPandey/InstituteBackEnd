const Model = require("../Model/StateModel");

// Create a new State
const createState = async (req, res) => {
  try {
    const data = new Model(req.body);
    const State = await Model.create(data);
    res.status(200).json({ message: "Create Sucessfully", data: State });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all States
const getAllState = async (req, res) => {
  try {
    const States = await Model.find();
    res.json(States);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single State by ID
const getStateById = async (req, res) => {
  try {
    const State = await Model.findOne({ userid: req.params.id });
    if (!State) {
      return res.status(404).json({ message: "Model not found" });
    }
    res.status(200).json({ data: [State] });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a State by ID
const updateStateById = async (req, res) => {
  try {
    const State = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!State) {
      return res.status(404).json({ message: "Model not found" });
    }
    res.status(200).json({ message: "Update Sucessfully", data: State });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a State by ID
const deleteStateById = async (req, res) => {
  try {
    const State = await Model.findByIdAndDelete(req.params.id);
    if (!State) {
      return res.status(404).json({ message: "Model not found" });
    }
    res.json({ message: "Model deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a State by ID
const StateByIdStatus = async (req, res) => {
  try {
    const State = await Model.findByIdAndUpdate(
      { _id: req.params.status },
      { status: req.body.status }
    );
    res.status(200).json({
      data: { _id: State._id, status: State.status },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createState,
  getAllState,
  getStateById,
  updateStateById,
  deleteStateById,
  StateByIdStatus,
};
