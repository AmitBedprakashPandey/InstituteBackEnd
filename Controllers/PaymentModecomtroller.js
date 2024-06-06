const Model = require("../Model/PaymentModeModel");

// Create a new PaymentMode
const createPaymentMode = async (req, res) => {
  try {
    const data = new Model(req.body);
    const PaymentMode = await Model.create(data);

    res.status(200).json({ message: "Create Sucessfully", data: PaymentMode });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all PaymentModes
const getAllPaymentMode = async (req, res) => {
  try {
    const PaymentModes = await Model.find();
    res.json(PaymentModes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single PaymentMode by ID
const getPaymentModeById = async (req, res) => {
  try {
    const PaymentMode = await Model.findOne({ userid: req.params.id });
    if (!PaymentMode) {
      return res.status(404).json({ message: "Model not found" });
    }
    res.status(200).json({ data: [PaymentMode] });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a PaymentMode by ID
const updatePaymentModeById = async (req, res) => {
  try {
    const PaymentMode = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!PaymentMode) {
      return res.status(404).json({ message: "Model not found" });
    }
    res.status(200).json({ message: "Update Sucessfully", data: PaymentMode });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a PaymentMode by ID
const deletePaymentModeById = async (req, res) => {
  try {
    const PaymentMode = await Model.findByIdAndDelete(req.params.id);
    if (!PaymentMode) {
      return res.status(404).json({ message: "Model not found" });
    }
    res.json({ message: "Model deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a PaymentMode by ID
const PaymentModeByIdStatus = async (req, res) => {
  try {
    const PaymentMode = await Model.findByIdAndUpdate(
      { _id: req.params.status },
      { status: req.body.status }
    );
    res.status(200).json({
      data: { _id: PaymentMode._id, status: PaymentMode.status },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createPaymentMode,
  getAllPaymentMode,
  getPaymentModeById,
  updatePaymentModeById,
  deletePaymentModeById,
  PaymentModeByIdStatus,
};
