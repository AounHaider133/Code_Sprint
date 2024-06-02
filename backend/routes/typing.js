const express = require("express");
const router = express.Router();
const typingController = require("../controllers/typing");

// Basic Typing routes
router.get("/basic", typingController.getBasicTyping);
router.get("/basic/:id", typingController.getBasicTypingById);
router.post("/basic", typingController.createBasicTyping);
router.patch("/basic/:id", typingController.updateBasicTyping);
router.delete("/basic/:id", typingController.deleteBasicTyping);
router.delete("/basic", typingController.deleteAllBasicTyping);

// Intermediate Typing routes
router.get("/intermediate", typingController.getIntermediateTyping);
router.get("/intermediate/:id", typingController.getIntermediateTypingById);
router.post("/intermediate", typingController.createIntermediateTyping);
router.patch("/intermediate/:id", typingController.updateIntermediateTyping);
router.delete("/intermediate/:id", typingController.deleteIntermediateTyping);
router.delete("/intermediate", typingController.deleteAllIntermediateTyping);

// Advance Typing routes
router.get("/advance", typingController.getAdvanceTyping);
router.get("/advance/:id", typingController.getAdvanceTypingById);
router.post("/advance", typingController.createAdvanceTyping);
router.patch("/advance/:id", typingController.updateAdvanceTyping);
router.delete("/advance/:id", typingController.deleteAdvanceTyping);
router.delete("/advance", typingController.deleteAllAdvanceTyping);

module.exports = router;
