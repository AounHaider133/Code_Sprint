const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdvanceQuizSchema = new Schema({
  questionText: { type: String, required: true },
  correctAnswers: { type: [String], required: true },
});

module.exports = mongoose.model("AdvanceQuiz", AdvanceQuizSchema);
