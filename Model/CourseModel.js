// models/courseModel.js
const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  courseType: { type: String },
  courseName: { type: String },
  courseCode: { type: String },
  certifiedAuthority: { type: String },
  examFee: { type: Number },
  courseFee: { type: Number },
  courseDuration: { type: String },
  userid: { type: String, require: true },
  status: { type: Boolean, default: false },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
