module.exports = (app) => {
    const mongoose = require('mongoose');
    mongoose.Promise = global.Promise;
    const url = process.env.MONGOLAB_URI ? process.env.MONGOLAB_URI : 'mongodb://localhost:27017/angular-teste-papratico'
    mongoose.connect(url);
    mongoose.connection.on('error', () => {
        console.log('Could not connect to the database. Exiting now...');
        process.exit();
    });
    mongoose.connection.once('open', () => {
        console.log("Successfully connected to the database");
    })
}
