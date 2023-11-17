const questions = [
    { question: "What is the speed of light?", subject: "Physics", topic: "Waves", difficulty: "Easy", marks: 5 },
    { question: "Define the concept of force?", subject: "Physics", topic: "Mechanics", difficulty: "Medium", marks: 10 },
    { question: "Explain the process of photosynthesis?", subject: "Biology", topic: "Plant Physiology", difficulty: "Hard", marks: 15 },
    { question: "What is the capital of France?", subject: "Geography", topic: "European Countries", difficulty: "Easy", marks: 5 },
    { question: "Name the major rivers of Asia?", subject: "Geography", topic: "Asian Geography", difficulty: "Medium", marks: 10 },
    { question: "Explain the concept of GDP and GNP?", subject: "Economics", topic: "Macroeconomics", difficulty: "Hard", marks: 15 },
  ];
  
  class QuestionStore {
    constructor() {
      this.questions = questions;
    }
  
    getQuestionsByDifficulty(difficulty) {
      return this.questions.filter((question) => question.difficulty === difficulty);
    }
  }
  
  module.exports = QuestionStore;
  