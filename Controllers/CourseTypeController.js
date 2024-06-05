const CourseType = require("../Model/CourseTypeModel");

exports.getAllCourseTypes = async (req, res) => {
  try {
    const courses = await CourseType.find();
    res.status(200).json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getCourseTypeById = async (req, res) => {
  try {
    const course = await CourseType.find({ userid: req.params.id });
    if (!course)
      return res.status(404).json({ message: "CourseType not found" });
    res.status(200).json(course);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createCourseType = async (req, res) => {
  try {
    const course = new CourseType(req.body);
    const newCourseType = await CourseType.create(course);
    res
      .status(201)
      .json({ message: "Create Succesfully", data: newCourseType });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateCourseType = async (req, res) => {
  try {
    const updatedCourseType = await CourseType.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedCourseType)
      return res.status(404).json({ message: "CourseType not found" });
    res
      .status(200)
      .json({ message: "Update Succesfully", data: updatedCourseType });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteCourseType = async (req, res) => {
  try {
    const course = await CourseType.findByIdAndDelete(req.params.id);
    if (!course)
      return res.status(404).json({ message: "CourseType not found" });
    res.status(200).json({ message: "CourseType deleted", data: course._id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
