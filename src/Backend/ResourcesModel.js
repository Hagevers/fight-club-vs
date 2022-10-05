const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResourcesTemple = new Schema({
    UserId: {
        type:String,
        required: true
    },
    Gold: {
        type: String,
        required: true
    },
    Solfour: {
        type: String,
        required: true
    },
    Marble: {
        type: String,
        required: true
    },
    Food: {
        type: String,
        required: true
    }
}, {versionKey: false});

module.exports = Resources = mongoose.model('resources', ResourcesTemple)