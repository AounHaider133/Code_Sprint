const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BasicTypingSchema = new Schema({
  text: { type: String, required: true },
});

module.exports = mongoose.model("BasicTyping", BasicTypingSchema);
