const mongoose = require('mongoose');

const signUpTemplate = new mongoose.Schema({
    NickName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date_created: {
        type: Date,
        default: Date.now
    },
    isVerified: {
        type: Boolean,
        default: false
    }
}, {versionKey: false});

module.exports = mongoose.model('pmmbrp', signUpTemplate)