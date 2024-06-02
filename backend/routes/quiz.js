const express = require("express");
const router = express.Router();
const quizController = require("../controllers/quiz");

// Basic Quiz routes
router.get("/basic", quizController.getBasicQuiz);
router.get("/basic/:id", quizController.getBasicQuizById);
router.post("/basic", quizController.createBasicQuiz);
router.patch("/basic/:id", quizController.updateBasicQuiz);
router.delete("/basic/:id", quizController.deleteBasicQuiz);
router.delete("/basic", quizController.deleteAllBasicQuiz);

// Intermediate Quiz routes
router.get("/intermediate", quizController.getIntermediateQuiz);
router.get("/intermediate/:id", quizController.getIntermediateQuizById);
router.post("/intermediate", quizController.createIntermediateQuiz);
router.patch("/intermediate/:id", quizController.updateIntermediateQuiz);
router.delete("/intermediate/:id", quizController.deleteIntermediateQuiz);
router.delete("/intermediate", quizController.deleteAllIntermediateQuiz);

// Advance Quiz routes
router.get("/advance", quizController.getAdvanceQuiz);
router.get("/advance/:id", quizController.getAdvanceQuizById);
router.post("/advance", quizController.createAdvanceQuiz);
router.patch("/advance/:id", quizController.updateAdvanceQuiz);
router.delete("/advance/:id", quizController.deleteAdvanceQuiz);
router.delete("/advance", quizController.deleteAllAdvanceQuiz);

module.exports = router;
