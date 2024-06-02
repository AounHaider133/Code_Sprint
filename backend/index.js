const express = require("express");
const cors = require("cors");
const { connectMongoDB } = require("./connection");
const userRouter = require("./routes/user");
const quizRouter = require("./routes/quiz");
const typingRouter = require("./routes/typing");

const app = express();
const PORT = 8888;

// Connect to MongoDB
connectMongoDB("mongodb://localhost:27017/code-sprint").then(() => {
  console.log("Connected to MongoDB!");
});

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded request bodies

// Routes
app.use("/api/users", userRouter); // Updated route to use /api/users
app.use("/quiz", quizRouter); // Quiz routes
app.use("/typing", typingRouter); // Typing routes

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal server error" });
});

// 404 Handling
app.use((req, res, next) => {
  res.status(404).json({ message: "Not Found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
