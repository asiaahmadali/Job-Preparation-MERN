import mongoose from "mongoose";

export const orderitemSchema = new mongoose.Schema({
    produtId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product"
    },
    quantity:{
        type:Number,
        required:true
    }
});

