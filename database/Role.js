const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema(
    {
        role : String
    }
);

module.exports = mongoose.model('Role',roleSchema);

