// models/courseModel.js
const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  date: { type: Date },
  paymentMode: { type: String },
  studentname: { type: String },
  dueAmt: { type: Number },
  dicount: { type: Number },
  paidAmt: { type: Number },
  ApayDueAmt: { type: Number },
  admissionFee: { type: Number },
  annualFee: { type: Number },
  tuitionFee: { type: Number },
  transportFee: { type: Number },
  examFee: { type: Number },
  regFee: { type: Number },

  collecteBy: { type: Number },
  remark: { type: String },
  studentId: { type: String },
  userid: { type: String, require: true },
});

const Course = mongoose.model("fees", courseSchema);

module.exports = Course;
