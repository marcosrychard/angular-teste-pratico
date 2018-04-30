const mongoose = require('mongoose')

const AnswersSchema = mongoose.Schema({
    optionAnswered: [String],
    subject:[]

})

module.exports = mongoose.model('Answer', AnswersSchema)
