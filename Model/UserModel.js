const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  ogpass: {
    type: String,
    required: true,
    required:true
  },
  status: {
    type: Boolean,
    default: false,
    required:true
  },
  auth: {
    type: Boolean,
    default: false,
    required:true
  },
  startDate: {
    type: Date,
  },
  expiredDate: {
    type: Date,    
  },
});

module.exports = mongoose.model("user", userSchema);
