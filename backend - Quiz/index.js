const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const questionRoutes = require("./routes/questionRoutes");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(bodyParser.json());
app.use("/api/questions", questionRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
