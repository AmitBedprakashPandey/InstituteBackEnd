const mongoose = require("mongoose");

// Define the schema
const studentSchema = new mongoose.Schema({
  studentId: { type: String },
  studentName: { type: String },
  fatherName: { type: String },
  motherName: { type: String },
  course: { type: String },
  dob: { type: Date },
  regdDate: { type: Date, default: Date.now },
  mobileNo: { type: Number },
  altMobileNo: { type: Number },
  email: { type: String, unique: true },
  bloodGroup: { type: String },
  gender: { type: String },
  religion: { type: String },
  studentAadharNo: { type: String },
  studentQualification: { type: String },
  nationality: { type: String },
  caste: { type: String },
  address1: { type: String },
  address2: { type: String },
  city: { type: String },
  state: { type: String },
  examCenter: { type: String },
  foundationCourse: { type: String },
  studentPhoto: { type: String },
  fatherPhoto: { type: String },
  motherPhoto: { type: String },
  certificate: { type: String },
  certificate1: { type: String },
  certificate2: { type: String },
  certificate3: { type: String },
  certificate4: { type: String },
  userid: { type: String, require: true },
  status: { type: Boolean, default: true },
});

// Create the model
const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
