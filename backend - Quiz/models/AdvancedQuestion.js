const mongoose = require("mongoose");

const AdvancedQuestionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  codeSnippet: { type: String, required: true },
  answer: { type: String, required: true },
});

module.exports = mongoose.model("AdvancedQuestion", AdvancedQuestionSchema);
