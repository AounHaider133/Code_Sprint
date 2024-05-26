const mongoose = require("mongoose");

const IntermediateQuestionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  codeSnippet: { type: String },
  options: [{ type: String, required: true }],
  answer: { type: String, required: true },
});

module.exports = mongoose.model(
  "IntermediateQuestion",
  IntermediateQuestionSchema
);
