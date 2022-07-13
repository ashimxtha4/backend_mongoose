const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
    {
        task_id : String,
        task_title : String,
        task_description : String,
        task_status : String,
        task_priority : Number,
        task_deadline : Date,
        employee_id : String,
        module_id : String ,
        pm_id : String ,
        project_id : String
    }
);

module.exports = mongoose.model("Task",taskSchema);
