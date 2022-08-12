const mongoose = require('mongoose')

var dogSchema = new mongoose.Schema({
    name: String,
    age: Number,
    breed: String
})

module.exports = mongoose.model('dog', dogSchema) 