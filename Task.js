const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
    {
        task_id : String,

        task_title : {
            type: String,
            required: [true,'Enter task title'],
        },
        task_description : {
            type: String,
            required: [true,'Enter task description title'],
        },
        task_status : {
            type: String,
            enum:[
                'Assigned',
            'Ongoing',
            'Completed',
        ],
        default:'Assigned'
    },
        task_priority : Number,
        task_deadline : Date,
        employee_id : String,
        module_id : String ,
        pm_id : String ,
        project_id : String
    }
);

module.exports = mongoose.model("Task",taskSchema);