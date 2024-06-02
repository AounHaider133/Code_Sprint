const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BasicQuizSchema = new Schema({
  questionText: { type: String, required: true },
  answers: {
    a: { type: String, required: true },
    b: { type: String, required: true },
    c: { type: String, required: true },
    d: { type: String, required: true },
  },
  correctAnswer: { type: String, required: true },
});

module.exports = mongoose.model("BasicQuiz", BasicQuizSchema);
