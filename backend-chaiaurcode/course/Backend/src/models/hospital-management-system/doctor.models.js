import mongoose from "mongoose";
import { contactSchema } from "./contact.models";

const doctorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        lowercase:true
    },
    specialization:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    contact:{
        type:contactSchema,
        required:true
    },
    availiability:{
        type:[String],
        reuired:true
    },
    appointments:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"appointment"
    }
},{timestamps:true});

export const doctor = mongoose.model("doctor",doctorSchema);