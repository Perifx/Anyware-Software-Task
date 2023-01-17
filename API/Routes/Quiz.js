const express = require("express");
const QuizController = require("../Controllers/Quiz");

const router = express.Router();

router.route("/new").post(QuizController.createQuiz);
router.route("/").get(QuizController.getAllQuizs);
router.route("/:id").get(QuizController.getQuiz);
router.route("/:id").delete(QuizController.deleteQuiz);
router.route("/:id").put(QuizController.updateQuiz);

module.exports = router;
