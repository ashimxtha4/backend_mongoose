const mongoose = require('mongoose');

const moduleSchema = new Schema(
    {
        module_id : String,
        module_name : String ,
        project_id : String ,
        task_id : [String] ,

    }
);

module.exports = mongoose.model("Module",moduleSchema)