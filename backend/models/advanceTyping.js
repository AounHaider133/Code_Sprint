const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdvanceTypingSchema = new Schema({
  text: { type: String, required: true },
});

module.exports = mongoose.model("AdvanceTyping", AdvanceTypingSchema);
