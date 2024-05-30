const express = require("express");
const {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
  handleLogin,
} = require("../controllers/user");

const router = express.Router();

router.get("/", handleGetAllUsers);
router.get("/:id", handleGetUserById);
router.put("/:id", handleUpdateUserById);
router.delete("/:id", handleDeleteUserById);
router.post("/", handleCreateNewUser);
router.post("/login", handleLogin);

module.exports = router;
