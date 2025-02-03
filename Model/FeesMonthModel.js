const mongoose = require("mongoose");

const feeMonthSchema = new mongoose.Schema({
  studentid: { type: String, required: true },
  userid: { type: String, require: true },
  name: { type: String, require: true },
  month: { type: Array, require: true },
});

const feeMonthsSchema = mongoose.model("feesmonth", feeMonthSchema);

module.exports = feeMonthsSchema;
