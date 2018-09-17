var mongoose = require('mongoose');

//create schema instance
const Schema = mongoose.Schema;

//create new movie schema; no need for timestamp
const MovieSchema = new Schema({
    title: String,
    description: String,
    releaseDate: Date
}, { timestamps: false });

//export to call in server.js
 module.exports = mongoose.model('Movie', MovieSchema);
