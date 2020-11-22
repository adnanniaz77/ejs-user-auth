const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        minLength: 6,
    },
    email: {
        type: String,
        unique: true,
        minLength: 6
    },
    password: {
        type: String,
        minLength: 6
    }
})

module.exports = mongoose.model('User', userSchema)