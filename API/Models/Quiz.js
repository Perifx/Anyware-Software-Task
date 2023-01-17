const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema(
  {
    instructor: { type: String, required: true },
    courseName: { type: String, required: true },
    courseCode: { type: String, required: true },
    topic: { type: String, required: true },
    description: { type: String, required: true },
    deadline: { type: Date, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Quiz", QuizSchema);
