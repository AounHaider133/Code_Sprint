const express = require("express");
const { connectMongoDB } = require("./connection");
const userRouter = require("./routes/user");
const app = express();
const PORT = 8888;

// Connection
connectMongoDB(
  "mongodb://localhost:27017/code-sprint"
).then(() => {
  console.log("Connected to MongoDB!");
});

// Middlewares - Plugins
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/", userRouter);
app.use("/user/", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
