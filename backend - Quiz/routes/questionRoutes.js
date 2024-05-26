const express = require("express");
const router = express.Router();
const questionController = require("../controllers/questionController");

router.post("/basic", questionController.addBasicQuestion);
router.post("/intermediate", questionController.addIntermediateQuestion);
router.post("/advanced", questionController.addAdvancedQuestion);
router.get("/:type", questionController.getQuestionsByType);

module.exports = router;
