const express = require("express");
const router = express.Router();
const questionController = require("../controllers/questionController");

// Add basic question
router.post("/basic", questionController.addBasicQuestion);

// Add intermediate question
router.post("/intermediate", questionController.addIntermediateQuestion);

// Add advanced question
router.post("/advanced", questionController.addAdvancedQuestion);

// Get all questions by type
router.get("/:type", questionController.getQuestionsByType);

// Update a question by ID
router.put("/:id", questionController.updateQuestion);

// Delete a question by ID
router.delete("/:id", questionController.deleteQuestion);

// Get a question by ID
router.get("/question/:id", questionController.getQuestionById);

// Filter questions based on criteria
router.get("/filter", questionController.filterQuestions);

// Check basic question answer
router.post("/basic/:id/check", questionController.checkBasicQuestionAnswer);

// Check intermediate question answer
router.post(
  "/intermediate/:id/check",
  questionController.checkIntermediateQuestionAnswer
);

// Check advanced question answer
router.post(
  "/advanced/:id/check",
  questionController.checkAdvancedQuestionAnswer
);

module.exports = router;
