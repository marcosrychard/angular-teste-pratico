const answerService = require('../service/answers.service')

module.exports = function (app) {
    app.post('/answers', answerService.create);
    app.get('/answers', answerService.findAll);
    app.get('/answers/:id', answerService.findOne);
    app.put('/answers/:id', answerService.update);
    app.delete('/answers/:id', answerService.deletee);
}