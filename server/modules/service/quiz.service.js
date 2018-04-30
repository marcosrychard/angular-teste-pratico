const Quiz = require('../models/quiz.model')

module.exports = {
    findAll,
    findOne,
    create,
    update,
    deletee,
    findQuizByItem
}

function findAll(req, res) {
    Quiz.find((err, quizzes) => {
        if (err) {
            console.log(err);
            res.status(500).send({ message: "Some error occurred while retrieving quiz." });
        }
        else {
            res.send(quizzes);
        }
    });
}

function findOne(req, res) {
    Quiz.findById(req.params.id, (err, quiz) => {
        if (err) {
            console.log(err);
            if (err.kind === 'ObjectId') {
                return res.status(404).send({ message: "quiz not found with id " + req.params.id });
            }
            return res.status(500).send({ message: "Error retrieving quiz with id " + req.params.id });
        }
        if (!quiz) {
            return res.status(404).send({ message: "quiz not found with id " + req.params.id });
        }
        res.send(quiz);
    });
}
function findQuizByItem(req, res) {
 
    Quiz.findOne(req.query, (err, quiz) => {
        if (err) {
            console.log(err);
            if (err.kind === 'ObjectId') {
                return res.status(404).send({ message: "quiz not found with id " + req.params.id });
            }
            return res.status(500).send({ message: "Error retrieving quiz with id " + req.params.id });
        }
        if (!quiz) {
            return res.status(404).send({ message: "quiz not found with id " + req.params.id });
        }
        res.send(quiz);
    });
}


function create(req, res) {
    const quiz = new Quiz(req.body);
    quiz.save((err, data) => {
        if (err) {
            res.status(500).send({ message: "Some error occurred while retrieving quizzes." });
        }
        else {
            res.send(data);
        }
    });
}

function update(req, res) {
    Quiz.findById(req.params.id, (err, quiz) => {
        if (err) {
            console.log(err);
            if (err.kind === 'ObjectId') {
                return res.status(404).send({ message: "quiz not found with id " + req.params.id });
            }
            return res.status(500).send({ message: "Error finding quiz with id " + req.params.id });
        }
        if (!quiz) {
            return res.status(404).send({ message: "quiz not found with id " + req.params.id });
        }
        quiz.save((err, data) => {
            if (err) {
                res.status(500).send({ message: "Could not update quiz with id " + req.params.id });
            }
            else {
                res.send(data);
            }
        });
    });
}

function deletee(req, res) {
    Quiz.findByIdAndRemove(req.params.id, (err, quiz) => {
        if (err) {
            console.log(err);
            if (err.kind === 'ObjectId') {
                return res.status(404).send({ message: "quiz not found with id " + req.params.id });
            }
            return res.status(500).send({ message: "Could not delete quiz with id " + req.params.id });
        }
        if (!quiz) {
            return res.status(404).send({ message: "quiz not found with id " + req.params.id });
        }
        res.send({ message: "quiz deleted successfully!" });
    });
}
