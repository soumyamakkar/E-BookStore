const { Schema, model } = require('mongoose');
const {hashSync,compareSync,genSaltSync}=require('bcrypt');

const verificationTokenSchema=new Schema({
    userId:{
        type:String,
        required:true,
    },
    token:{
        type:String,
        required:true,
    },
    expires:{
        type:Date,
        default:Date.now(),
        expires:60*60*24
    }
});

verificationTokenSchema.pre('save',function(next){
    if(this.isModified('token')){
        const salt=genSaltSync(10)
        this.token=hashSync(this.token,salt)
    }
    next()
})

verificationTokenSchema.methods.compare=function(token){
    return compareSync(token,this.token)
}

const VerificationTokenModel=model("VerificationToken",verificationTokenSchema);
module.exports=VerificationTokenModel;