import mongoose from "mongoose";

export const contactSchema= new mongoose.Schema({
    phone:{
        type:String,
        required:true
    },
    email:{
        type:email,
        required:true
    },
    address:{
        type:String,
        required:true
    }
},{timestamps:true}) ;