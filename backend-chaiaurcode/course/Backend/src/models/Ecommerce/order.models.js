import mongoose, { mongo } from "mongoose";
import { orderitemSchema } from "./orderItem.models";

const orderSchema = new mongoose.Schema({
    price:{
        type:Number,
        required:true
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    orderItems:{
        type:[orderitemSchema]
    },
    // can also make new schema for address
    address:[
        {
            countrycode:{
                type:Number,
                required:true
            },
            countryname:{
                type:String,
                required:true
            },
            city:{
                type:String,
                required:true
            }
        }
    ],
    status:{
        type:String,
        enum:["PENDING","DELIVERED","CANCELLED"],
        default:"PENDING"
    }
},{timestamps:true});

export const order = mongoose.model("order",orderSchema);