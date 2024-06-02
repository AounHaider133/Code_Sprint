const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IntermediateTypingSchema = new Schema({
  text: { type: String, required: true },
});

module.exports = mongoose.model("IntermediateTyping", IntermediateTypingSchema);
