import mongoose from "mongoose";

const TaskShcema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:[20,'Max length is 20'],
        trim:true
    },
    completed:Boolean
})

export const Task = mongoose.model('Task',TaskShcema)