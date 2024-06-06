const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const state = mongoose.model("paymentMode", stateSchema);

module.exports = state;
