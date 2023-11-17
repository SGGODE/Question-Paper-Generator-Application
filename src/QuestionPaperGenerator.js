const QuestionStore = require('./QuestionStore');

class QuestionPaperGenerator {
  constructor() {
    this.questionStore = new QuestionStore();
  }

  generateQuestionPaper(totalMarks, difficultyDistribution) {
    const questionPaper = [];
    const easyQuestions = this.questionStore.getQuestionsByDifficulty('Easy');
    const mediumQuestions = this.questionStore.getQuestionsByDifficulty('Medium');
    const hardQuestions = this.questionStore.getQuestionsByDifficulty('Hard');

    const easyQuestionCount = Math.floor((totalMarks * difficultyDistribution.easy) / 5);
    const mediumQuestionCount = Math.floor((totalMarks * difficultyDistribution.medium) / 10);
    const hardQuestionCount = Math.floor((totalMarks * difficultyDistribution.hard) / 15);

    for (let i = 0; i < easyQuestionCount; i++) {
      const randomIndex = Math.floor(Math.random() * easyQuestions.length);
      questionPaper.push(easyQuestions[randomIndex]);
    }

    for (let i = 0; i < mediumQuestionCount; i++) {
      const randomIndex = Math.floor(Math.random() * mediumQuestions.length);
      questionPaper.push(mediumQuestions[randomIndex]);
    }

    for (let i = 0; i < hardQuestionCount; i++) {
      const randomIndex = Math.floor(Math.random() * hardQuestions.length);
      questionPaper.push(hardQuestions[randomIndex]);
    }

    return questionPaper;
  }
}

module.exports = QuestionPaperGenerator;

