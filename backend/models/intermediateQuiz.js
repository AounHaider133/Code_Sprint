const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IntermediateQuizSchema = new Schema({
  questionText: { type: String, required: true },
  correctAnswer: { type: String, required: true },
});

module.exports = mongoose.model("IntermediateQuiz", IntermediateQuizSchema);
