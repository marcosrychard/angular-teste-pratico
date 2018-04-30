const Answer = require('../models/answers.model')

module.exports = {
    findAll,
    findOne,
    create,
    update,
    deletee
}

function findAll(req, res) {
    Answer.find((err, answer) => {
        if (err) {
            console.log(err);
            res.status(500).send({ message: "Some error occurred while retrieving answer." });
        }
        else {
            res.send(answer);
        }
    });
}

function findOne(req, res) {
    Answer.findById(req.params.id, (err, answer) => {
        if (err) {
            console.log(err);
            if (err.kind === 'ObjectId') {
                return res.status(404).send({ message: "answer not found with id " + req.params.id });
            }
            return res.status(500).send({ message: "Error retrieving answer with id " + req.params.id });
        }
        if (!answer) {
            return res.status(404).send({ message: "answer not found with id " + req.params.id });
        }
        res.send(answer);
    });
}

function create(req, res) {
    const answer = new Answer(req.body);
    answer.save((err, data) => {
        if (err) {
            res.status(500).send({ message: "Some error occurred while retrieving answer." });
        }
        else {
            res.send(data);
        }
    });
}

function update(req, res) {
    Answer.findById(req.params.id, (err, answer) => {
        if (err) {
            console.log(err);
            if (err.kind === 'ObjectId') {
                return res.status(404).send({ message: "answer not found with id " + req.params.id });
            }
            return res.status(500).send({ message: "Error finding answer with id " + req.params.id });
        }
        if (!answer) {
            return res.status(404).send({ message: "answer not found with id " + req.params.id });
        }
        answer.save((err, data) => {
            if (err) {
                res.status(500).send({ message: "Could not update answer with id " + req.params.id });
            }
            else {
                res.send(data);
            }
        });
    });
}

function deletee(req, res) {
    Answer.findByIdAndRemove(req.params.id, (err, answer) => {
        if (err) {
            console.log(err);
            if (err.kind === 'ObjectId') {
                return res.status(404).send({ message: "answer not found with id " + req.params.id });
            }
            return res.status(500).send({ message: "Could not delete answer with id " + req.params.id });
        }
        if (!answer) {
            return res.status(404).send({ message: "answer not found with id " + req.params.id });
        }
        res.send({ message: "answer deleted successfully!" });
    });
}

