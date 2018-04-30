const mongoose = require('mongoose')

const QuizSchema = mongoose.Schema({
    type: String,
    text: String,
    items: [String]
})

module.exports = mongoose.model('Quiz', QuizSchema)
