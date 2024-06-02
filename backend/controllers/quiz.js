const BasicQuiz = require("../models/basicQuiz");
const IntermediateQuiz = require("../models/intermediateQuiz");
const AdvanceQuiz = require("../models/advanceQuiz");

// CRUD operations for Basic Quiz
exports.getBasicQuiz = async (req, res) => {
  try {
    const quiz = await BasicQuiz.find();
    res.json(quiz);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getBasicQuizById = async (req, res) => {
  try {
    const quiz = await BasicQuiz.findById(req.params.id);
    if (!quiz) return res.status(404).json({ message: "Quiz not found" });
    res.json(quiz);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createBasicQuiz = async (req, res) => {
  const newQuiz = new BasicQuiz(req.body);
  try {
    const savedQuiz = await newQuiz.save();
    res.status(201).json(savedQuiz);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateBasicQuiz = async (req, res) => {
  try {
    const updatedQuiz = await BasicQuiz.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedQuiz)
      return res.status(404).json({ message: "Quiz not found" });
    res.json(updatedQuiz);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteBasicQuiz = async (req, res) => {
  try {
    const deletedQuiz = await BasicQuiz.findByIdAndDelete(req.params.id);
    if (!deletedQuiz)
      return res.status(404).json({ message: "Quiz not found" });
    res.json({ message: "Quiz deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteAllBasicQuiz = async (req, res) => {
  try {
    await BasicQuiz.deleteMany();
    res.json({ message: "All quizzes deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CRUD operations for Intermediate Quiz
exports.getIntermediateQuiz = async (req, res) => {
  try {
    const quiz = await IntermediateQuiz.find();
    res.json(quiz);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getIntermediateQuizById = async (req, res) => {
  try {
    const quiz = await IntermediateQuiz.findById(req.params.id);
    if (!quiz) return res.status(404).json({ message: "Quiz not found" });
    res.json(quiz);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createIntermediateQuiz = async (req, res) => {
  const newQuiz = new IntermediateQuiz(req.body);
  try {
    const savedQuiz = await newQuiz.save();
    res.status(201).json(savedQuiz);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateIntermediateQuiz = async (req, res) => {
  try {
    const updatedQuiz = await IntermediateQuiz.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedQuiz)
      return res.status(404).json({ message: "Quiz not found" });
    res.json(updatedQuiz);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteIntermediateQuiz = async (req, res) => {
  try {
    const deletedQuiz = await IntermediateQuiz.findByIdAndDelete(req.params.id);
    if (!deletedQuiz)
      return res.status(404).json({ message: "Quiz not found" });
    res.json({ message: "Quiz deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteAllIntermediateQuiz = async (req, res) => {
  try {
    await IntermediateQuiz.deleteMany();
    res.json({ message: "All quizzes deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CRUD operations for Advance Quiz
exports.getAdvanceQuiz = async (req, res) => {
  try {
    const quiz = await AdvanceQuiz.find();
    res.json(quiz);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAdvanceQuizById = async (req, res) => {
  try {
    const quiz = await AdvanceQuiz.findById(req.params.id);
    if (!quiz) return res.status(404).json({ message: "Quiz not found" });
    res.json(quiz);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createAdvanceQuiz = async (req, res) => {
  const newQuiz = new AdvanceQuiz(req.body);
  try {
    const savedQuiz = await newQuiz.save();
    res.status(201).json(savedQuiz);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateAdvanceQuiz = async (req, res) => {
  try {
    const updatedQuiz = await AdvanceQuiz.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedQuiz)
      return res.status(404).json({ message: "Quiz not found" });
    res.json(updatedQuiz);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteAdvanceQuiz = async (req, res) => {
  try {
    const deletedQuiz = await AdvanceQuiz.findByIdAndDelete(req.params.id);
    if (!deletedQuiz)
      return res.status(404).json({ message: "Quiz not found" });
    res.json({ message: "Quiz deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteAllAdvanceQuiz = async (req, res) => {
  try {
    await AdvanceQuiz.deleteMany();
    res.json({ message: "All quizzes deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
