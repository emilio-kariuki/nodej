const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = Schema({
    name:{
        type: String,
       
    },
    age: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', User);