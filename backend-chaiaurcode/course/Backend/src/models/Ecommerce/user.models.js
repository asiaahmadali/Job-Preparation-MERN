import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:[true,"user name must be unique"],
        lowercase:[true,"useranme should lowercase"]
    },
    email:{
        type:String,
        required:true,
        unique:[true, "email should unique"],
        lowercase:[true,"email should lowercase"]
    },
    password:{
        trpe:String,
        required:true,
        minlength:8,
        maxlength:20
    }
},{timestamps:true});

export const user = mongoose.model("user",userSchema);