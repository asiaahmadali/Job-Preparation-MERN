import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    iscomplete:{
        type:Boolean,
        default:false
    },
    craetedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    subTodos:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"SubTodo"
        }
    ]   // array of subtodes
},{timestamps:true});

export const Todo = mongoose.model("Todo",todoSchema);

// import mongoose from "mongoose";

// const todoSchema = new mongoose.Schema({
//     content:{
//         type:String,
//         required:[true,"content is require"]
//     },
//     iscomplete:{
//         type:Boolean,
//         default:[false,"please overwrite this status later on"]
//     },
//     craetedBy:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"User"
//     },
//     subtodos:[
//         {
//             type:mongoose.Schema.Types.ObjectId,
//             ref:"SubTodo"
//         }
//     ]
// },{timestapms:true});

// export const Todo = mongoose.model("Todo",todoSchema);