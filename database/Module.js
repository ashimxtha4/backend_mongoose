const mongoose = require('mongoose');

const moduleSchema = new Schema(
    {
        module_name : String ,
        project_id :{
            ref : 'module'
        },
        task_id : {
            ref : 'task'
        }
    }
);

module.exports = mongoose.model("Module",moduleSchema)