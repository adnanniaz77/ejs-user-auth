const mongoose = require('mongoose')
const {isEmail} = require('validator')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        minlength: [6, 'Minimum username length is 6 characters'],
        required: [true, 'Please enter a username']
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, 'Please enter an email'],
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        minlength: [6, 'Minimum password length is 6 characters'],
        required: [true, 'Please enter a password']
    }
})

// Hashing the password before saving to database
userSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    next();
})

module.exports = mongoose.model('User', userSchema)