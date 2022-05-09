const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String
    },
    updated_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Task = mongoose.model('task', TaskSchema);