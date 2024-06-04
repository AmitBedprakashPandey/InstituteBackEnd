const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: true,
  },
  courseId: {
    type: String,
    required: true,
  },
  userid: { type: String, require: true },
  status: { type: Boolean, default: false },
});

const Enrollment = mongoose.model("Enrollment", enrollmentSchema);

module.exports = Enrollment;
