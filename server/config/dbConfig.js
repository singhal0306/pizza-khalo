const mongoose = require("mongoose");

var mongoURL = process.env.mongo_url

mongoose.connect(mongoURL)

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB SuccessFully!');
});

mongoose.connection.on('error', (err) => {
    console.error(`MongoDB connection error: ${err}`);
});

module.exports = mongoose;