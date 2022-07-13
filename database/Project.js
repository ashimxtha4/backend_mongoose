const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
    {
        project_id : String ,
        project_name : String,
        pm_id : String,
        emoployee_id : [String]
    }
);

module.exports = mongoose.model("Project",projectSchema)
