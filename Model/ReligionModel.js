const mongoose = require("mongoose");

const religionSchema = new mongoose.Schema({
  religion: { type: String, required: true },
});

const religion = mongoose.model("religion", religionSchema);

module.exports = religion;
