const QuestionPaperGenerator = require('./QuestionPaperGenerator');

const generator = new QuestionPaperGenerator();

const questionPaper = generator.generateQuestionPaper(100, { easy: 0.2, medium: 0.5, hard: 0.3 });

console.log(questionPaper);
