module.exports = (app) => {
    const mongoose = require('mongoose');
    mongoose.Promise = global.Promise;
    //mongodb://angular-teste-pratico:angular-teste-pratico@ds263639.mlab.com:63639/angular-teste-pratico
    mongoose.connect('mongodb://angular-teste-pratico:angular-teste-pratico@ds263639.mlab.com:63639/angular-teste-pratico');
    mongoose.connection.on('error', () => {
        console.log('Could not connect to the database. Exiting now...');
        process.exit();
    });
    mongoose.connection.once('open', () => {
        console.log("Successfully connected to the database");
    })
}
