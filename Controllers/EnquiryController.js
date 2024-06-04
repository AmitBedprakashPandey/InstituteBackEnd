const Enquiry = require("../Model/EnquiryModel");

// Create a new enquiry
const createEnquiry = async (req, res) => {
  try {
    const data = new Enquiry(req.body);

    const enquiry = await Enquiry.create(data);

    res.status(200).json({ message: "Create Sucessfully", data: enquiry });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all enquirys
const getAllEnquirys = async (req, res) => {
  try {
    const enquirys = await Enquiry.find();
    res.json(enquirys);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single enquiry by ID
const getEnquiryById = async (req, res) => {
  try {
    const enquiry = await Enquiry.findOne({ userid: req.params.id });
    if (!enquiry) {
      return res.status(404).json({ error: "Enquiry not found" });
    }
    res.status(200).json(enquiry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a enquiry by ID
const updateEnquiryById = async (req, res) => {
  try {
    const data = new Enquiry(req.body);
    const enquiry = await Enquiry.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });
    if (!enquiry) {
      return res.status(404).json({ message: "Enquiry not found" });
    }
    res.status(200).json({ message: "Update Sucessfully", data: enquiry });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a enquiry by ID
const deleteEnquiryById = async (req, res) => {
  try {
    const enquiry = await Enquiry.findByIdAndDelete(req.params.id);
    if (!enquiry) {
      return res.status(404).json({ message: "Enquiry not found" });
    }
    res.status(200).json({ message: "Deleted successfully", id: enquiry._id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createEnquiry,
  getAllEnquirys,
  getEnquiryById,
  updateEnquiryById,
  deleteEnquiryById,
  
};
