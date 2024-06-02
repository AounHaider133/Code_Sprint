const BasicTyping = require("../models/basicTyping");
const IntermediateTyping = require("../models/intermediateTyping");
const AdvanceTyping = require("../models/advanceTyping");

// CRUD operations for Basic Typing
exports.getBasicTyping = async (req, res) => {
  try {
    const typing = await BasicTyping.find();
    res.json(typing);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getBasicTypingById = async (req, res) => {
  try {
    const typing = await BasicTyping.findById(req.params.id);
    if (!typing)
      return res.status(404).json({ message: "Typing test not found" });
    res.json(typing);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createBasicTyping = async (req, res) => {
  const newTyping = new BasicTyping(req.body);
  try {
    const savedTyping = await newTyping.save();
    res.status(201).json(savedTyping);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateBasicTyping = async (req, res) => {
  try {
    const updatedTyping = await BasicTyping.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedTyping)
      return res.status(404).json({ message: "Typing test not found" });
    res.json(updatedTyping);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteBasicTyping = async (req, res) => {
  try {
    const deletedTyping = await BasicTyping.findByIdAndDelete(req.params.id);
    if (!deletedTyping)
      return res.status(404).json({ message: "Typing test not found" });
    res.json({ message: "Typing test deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteAllBasicTyping = async (req, res) => {
  try {
    await BasicTyping.deleteMany();
    res.json({ message: "All typing tests deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CRUD operations for Intermediate Typing
exports.getIntermediateTyping = async (req, res) => {
  try {
    const typing = await IntermediateTyping.find();
    res.json(typing);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getIntermediateTypingById = async (req, res) => {
  try {
    const typing = await IntermediateTyping.findById(req.params.id);
    if (!typing)
      return res.status(404).json({ message: "Typing test not found" });
    res.json(typing);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createIntermediateTyping = async (req, res) => {
  const newTyping = new IntermediateTyping(req.body);
  try {
    const savedTyping = await newTyping.save();
    res.status(201).json(savedTyping);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateIntermediateTyping = async (req, res) => {
  try {
    const updatedTyping = await IntermediateTyping.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedTyping)
      return res.status(404).json({ message: "Typing test not found" });
    res.json(updatedTyping);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteIntermediateTyping = async (req, res) => {
  try {
    const deletedTyping = await IntermediateTyping.findByIdAndDelete(
      req.params.id
    );
    if (!deletedTyping)
      return res.status(404).json({ message: "Typing test not found" });
    res.json({ message: "Typing test deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteAllIntermediateTyping = async (req, res) => {
  try {
    await IntermediateTyping.deleteMany();
    res.json({ message: "All typing tests deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CRUD operations for Advance Typing
exports.getAdvanceTyping = async (req, res) => {
  try {
    const typing = await AdvanceTyping.find();
    res.json(typing);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAdvanceTypingById = async (req, res) => {
  try {
    const typing = await AdvanceTyping.findById(req.params.id);
    if (!typing)
      return res.status(404).json({ message: "Typing test not found" });
    res.json(typing);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createAdvanceTyping = async (req, res) => {
  const newTyping = new AdvanceTyping(req.body);
  try {
    const savedTyping = await newTyping.save();
    res.status(201).json(savedTyping);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateAdvanceTyping = async (req, res) => {
  try {
    const updatedTyping = await AdvanceTyping.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedTyping)
      return res.status(404).json({ message: "Typing test not found" });
    res.json(updatedTyping);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteAdvanceTyping = async (req, res) => {
  try {
    const deletedTyping = await AdvanceTyping.findByIdAndDelete(req.params.id);
    if (!deletedTyping)
      return res.status(404).json({ message: "Typing test not found" });
    res.json({ message: "Typing test deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteAllAdvanceTyping = async (req, res) => {
  try {
    await AdvanceTyping.deleteMany();
    res.json({ message: "All typing tests deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
