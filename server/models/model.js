const mongoose = require('mongoose');
module.exports = new mongoose.Schema({
    name: {type: String, required: [true, 'Name must be at least 3 characters'], unique: true, minlength: 3},
    type: {type: String, required: [true, 'Please specify a real Type of pet'], minlength: 3},
    likes: {type: Number, default: 0}, 
    description: {type: String, required: [true, 'Description must be at least 3 characters'], minlength: 3},
    skills: [{
        skill: {type: String}
    }]},
    {timestamps: true});