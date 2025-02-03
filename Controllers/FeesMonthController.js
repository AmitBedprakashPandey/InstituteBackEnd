const FeesMonth = require("../Model/FeesMonthModel");

exports.getFeesMonthById = async (req, res) => {
  try {
    const course = await FeesMonth.findOne({
      userid: req.params.id,
      studentid: req.params.studentid,
    });
    res.status(200).json(course);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createFeesMonth = async (req, res) => {
  try {
    const course = new FeesMonth(req.body);
    const newFeesMonth = await FeesMonth.create(course);
    console.log(newFeesMonth);
    res.status(201).json({ message: "Create Succesfully", data: newFeesMonth });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateFeesMonth = async (req, res) => {
  try {
    console.log(req.params,req.body);
    const updatedFeesMonth = await FeesMonth.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedFeesMonth)
      return res.status(404).json({ message: "FeesMonth not found" });
    res
      .status(200)
      .json({ message: "Update Succesfully", data: updatedFeesMonth });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

