const mongoose = require("mongoose");

// Define the schema
const studentSchema = new mongoose.Schema({
  studentName: { type: String },
  fatherName: { type: String },
  motherName: { type: String },
  course: { type: String },
  dob: { type: Date },
  enquiryDate: { type: Date },
  mobileNo: { type: Number },
  altMobile: { type: Number },
  email: { type: String, unique: true },
  gender: { type: String },
  religion: { type: String },
  caste: { type: String },
  address1: { type: String },
  address2: { type: String },
  city: { type: String },
  state: { type: String },
  enquiryBy: { type: String },
  status: { type: Boolean,default : false },
  enquiryStatus: { type: Boolean,default : false },
  studentPhoto: { type: String },
  fatherPhoto: { type: String },
  motherPhoto: { type: String },
  certificate: { type: String },
  userid: { type: String, require: true },
});

// Create the model
const Enquiry = mongoose.model("enquiry", studentSchema);

module.exports = Enquiry;
