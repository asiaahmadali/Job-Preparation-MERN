import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    patient:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"patient",
        required:true
    },
    doctor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"doctor",
        required:true
    },
    date:{
        type:date,
        required:true
    },
    status:{
        type:String,
        enum:["Scheduled","Completed","Cancelled"]
    },
    note:{
        type:String,
        required:true
    }

},{timestamps:true});

export const appointment = mongoose.model("appointment",appointmentSchema)