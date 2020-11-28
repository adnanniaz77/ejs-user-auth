const mongoose = require('mongoose')
const {isEmail} = require('validator')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        minlength: 6,
        required: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        minlength: 6,
        required: true
    }
})

module.exports = mongoose.model('User', userSchema)