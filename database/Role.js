const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema(
    {
        role_id : String,
        role : String
    }
);

module.exports = mongoose.model('Role',roleSchema);

