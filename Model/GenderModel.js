const mongoose = require("mongoose");

const genderSchema = new mongoose.Schema({
  gender: { type: String, required: true },
});

const gender = mongoose.model("gender", genderSchema);

module.exports = gender;
