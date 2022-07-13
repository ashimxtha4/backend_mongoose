const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        emoployee_id : String,
        first_name : String,
        last_name : String ,
        email : String ,
        role_id : [String],
        designation : String,
        isEmailVerified : Boolean,
        user_name : String,
        password : String
    }
);

module.exports = mongoose.model("User",userSchema)