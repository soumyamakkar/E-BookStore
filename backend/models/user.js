const { Schema, model } = require('mongoose');


const userSchema= new Schema({
    name:{
        type:String,
        trim:true,
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true,
    },
    role:{
        type:String,
        enum:['user','author'],
        default:"user",
    }
})

const UserModel=model("User",userSchema);

module.exports=UserModel;