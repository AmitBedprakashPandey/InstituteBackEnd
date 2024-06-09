const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
  userid: { type: String },
  schoolPhoto: { type: String },
  schoolName: { type: String },
  address: { type: String },
  webiste: { type: String },
  email: { type: String },
  state: { type: String },

  pincode: { type: Number },
  city: { type: String },
  phone: { type: Number },
  phone2: { type: Number },
  office: { type: Number },
  office2: { type: Number },
  status: { type: Boolean, default: true },
  date: { type: Date, default: new Date() },
});

const school = mongoose.model("school", schoolSchema);

module.exports = school;
