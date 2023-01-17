const Quiz = require("../Models/Quiz");

// 1- CREATE QUIZ

exports.createQuiz = async (req, res) => {
  const newQuiz = new Quiz(req.body);

  try {
    const savedQuiz = await newQuiz.save();
    res.status(200).json(savedQuiz);
  } catch (error) {
    res.status(500).json(error);
  }
};

// 2- GET ALL QUIZ

exports.getAllQuizs = async (req, res) => {
  try {
    let quizs = await Quiz.find().sort({ createdAt: -1 });
    res.status(200).json(quizs);
  } catch (error) {
    res.status(500).json(error);
  }
};

// 3- GET QUIZ BY ID

exports.getQuiz = async (req, res) => {
  try {
    let quiz = await Quiz.findById(req.params.id);
    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json(error);
  }
};

// 4- DELETE QUIZ

exports.deleteQuiz = async (req, res) => {
  try {
    let quiz = await Quiz.findByIdAndDelete(req.params.id);
    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json(error);
  }
};

// 5- UPDATE QUIZ

exports.updateQuiz = async (req, res) => {
  try {
    let quiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json(error);
  }
};
