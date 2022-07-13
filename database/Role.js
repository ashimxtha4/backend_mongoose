const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema(
    {
        role_id : String,
        role : String
    }
);

const Role=mongoose.model('Role',roleSchema);

