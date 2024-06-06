const mongoose = require("mongoose");

const foundationSchema = new mongoose.Schema({
  foundation: { type: String, required: true },
});

const foundation = mongoose.model("foundation", foundationSchema);

module.exports = foundation;
