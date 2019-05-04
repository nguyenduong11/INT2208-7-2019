const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var commentSchema = new Schema({
    sender: {
        type: String,
        default: ''
    },
    content: {
        type: String,
        default: ''
    },
    sendDate: {
        type: Date,
        default: Date.now
    }
});



module.exports = commentSchema;