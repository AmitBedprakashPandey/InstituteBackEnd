const mongoose = require("mongoose");

const coursetypeSchema = new mongoose.Schema({
  coursetype: { type: String, required: true },
  userid: { type: String, require: true },
  status: { type: Boolean, default: false },
});

const coursetype = mongoose.model("coursetype", coursetypeSchema);

module.exports = coursetype;
