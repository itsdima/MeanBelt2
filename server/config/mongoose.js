const mongoose = require('mongoose');
const PetSchema = require('../models/model');
mongoose.model('Pet', PetSchema);