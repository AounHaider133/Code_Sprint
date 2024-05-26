const BasicQuestion = require("../models/BasicQuestion");
const IntermediateQuestion = require("../models/IntermediateQuestion");
const AdvancedQuestion = require("../models/AdvancedQuestion");

// Add a basic question
exports.addBasicQuestion = async (req, res) => {
  try {
    const question = new BasicQuestion(req.body);
    await question.save();
    res.status(201).json(question);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Add an intermediate question
exports.addIntermediateQuestion = async (req, res) => {
  try {
    const question = new IntermediateQuestion(req.body);
    await question.save();
    res.status(201).json(question);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Add an advanced question
exports.addAdvancedQuestion = async (req, res) => {
  try {
    const question = new AdvancedQuestion(req.body);
    await question.save();
    res.status(201).json(question);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all questions by type
exports.getQuestionsByType = async (req, res) => {
  try {
    const type = req.params.type;
    let questions;
    switch (type) {
      case "basic":
        questions = await BasicQuestion.find();
        break;
      case "intermediate":
        questions = await IntermediateQuestion.find();
        break;
      case "advanced":
        questions = await AdvancedQuestion.find();
        break;
      default:
        return res.status(400).json({ error: "Invalid question type" });
    }
    res.status(200).json(questions);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// function to update an existing question based on its ID.
exports.updateQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    const { questionText, options, correctAnswer } = req.body;
    const updatedQuestion = await BasicQuestion.findByIdAndUpdate(
      id,
      { questionText, options, correctAnswer },
      { new: true }
    );
    if (!updatedQuestion) {
      return res.status(404).json({ error: "Question not found" });
    }
    res.status(200).json(updatedQuestion);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// function to delete a question based on its ID.
exports.deleteQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedQuestion = await BasicQuestion.findByIdAndDelete(id);
    if (!deletedQuestion) {
      return res.status(404).json({ error: "Question not found" });
    }
    res.status(200).json({ message: "Question deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// function to retrieve a specific question by its ID.
exports.getQuestionById = async (req, res) => {
  try {
    const { id } = req.params;
    const question = await BasicQuestion.findById(id);
    if (!question) {
      return res.status(404).json({ error: "Question not found" });
    }
    res.status(200).json(question);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// function to filter questions based on specific criteria, such as difficulty level or topic.
exports.filterQuestions = async (req, res) => {
  try {
    const { difficulty, topic } = req.query;
    let filter = {};
    if (difficulty) {
      filter.difficulty = difficulty;
    }
    if (topic) {
      filter.topic = topic;
    }
    const filteredQuestions = await BasicQuestion.find(filter);
    res.status(200).json(filteredQuestions);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// a function to check if the provided answer matches the correct answer for a basic question.
exports.checkBasicQuestionAnswer = async (req, res) => {
  try {
    const { id } = req.params;
    const { answer } = req.body;
    const question = await BasicQuestion.findById(id);
    if (!question) {
      return res.status(404).json({ error: "Question not found" });
    }
    const isCorrect = question.correctAnswer === answer;
    res.status(200).json({ correct: isCorrect });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// a function to check the answer for an intermediate question and return whether it's correct or not.
exports.checkIntermediateQuestionAnswer = async (req, res) => {
  try {
    const { id } = req.params;
    const { answer } = req.body;
    const question = await IntermediateQuestion.findById(id);
    if (!question) {
      return res.status(404).json({ error: "Question not found" });
    }
    const isCorrect = question.correctAnswer === answer;
    res.status(200).json({ correct: isCorrect });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//  a function to validate the answer for an advanced question and return the correctness status.
exports.checkAdvancedQuestionAnswer = async (req, res) => {
  try {
    const { id } = req.params;
    const { answer } = req.body;
    const question = await AdvancedQuestion.findById(id);
    if (!question) {
      return res.status(404).json({ error: "Question not found" });
    }
    const isCorrect = question.correctAnswer === answer;
    res.status(200).json({ correct: isCorrect });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
