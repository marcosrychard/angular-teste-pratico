module.exports = (app) => {
    const mongoose = require('mongoose');
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost:27017/cedro');
    mongoose.connection.on('error', () => {
        console.log('Could not connect to the database. Exiting now...');
        process.exit();
    });
    mongoose.connection.once('open', () => {
        console.log("Successfully connected to the database");
    })
}