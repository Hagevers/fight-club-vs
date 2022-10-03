const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const signUpTemplate = new Schema({
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
    },
    token: {
        type: String,
        default: ''
    }
}, {versionKey: false});

module.exports = User = mongoose.model('pmmbrp', signUpTemplate)