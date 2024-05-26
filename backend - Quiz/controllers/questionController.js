const BasicQuestion = require('../models/BasicQuestion');
const IntermediateQuestion = require('../models/IntermediateQuestion');
const AdvancedQuestion = require('../models/AdvancedQuestion');

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
            case 'basic':
                questions = await BasicQuestion.find();
                break;
            case 'intermediate':
                questions = await IntermediateQuestion.find();
                break;
            case 'advanced':
                questions = await AdvancedQuestion.find();
                break;
            default:
                return res.status(400).json({ error: 'Invalid question type' });
        }
        res.status(200).json(questions);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
