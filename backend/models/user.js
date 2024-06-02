const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    points: {
      type: Number,
      default: 0,
    },
    quiz1_progress: {
      type: Number,
      default: 0,
    },
    quiz2_progress: {
      type: Number,
      default: 0,
    },
    quiz3_progress: {
      type: Number,
      default: 0,
    },
    typing1_progress: {
      type: Number,
      default: 0,
    },
    typing2_progress: {
      type: Number,
      default: 0,
    },
    typing3_progress: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
