const quizService = require('../service/quiz.service')

module.exports = function (app) {
    app.post('/quizzes', quizService.create);
    app.get('/quizzes', quizService.findAll);
    app.get('/quizzes/search/:items?', quizService.findQuizByItem);
    app.get('/quizzes/:id', quizService.findOne);
    app.put('/quizzes/:id', quizService.update);
    app.delete('/quizzes/:id', quizService.deletee);
}