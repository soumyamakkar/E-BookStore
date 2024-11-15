const crypto=require('crypto');
const UserModel = require('../models/user');
const nodemailer=require('nodemailer');
const VerificationTokenModel = require('../models/verificationToken');
const mail = require('../utils/mail');

const generateAuthLink=async (req,res)=>{
    //Generate authentication link
    //and send that link to the user's mail address
    const randomToken=crypto.randomBytes(36).toString("hex")

    /*
    Generate unique token for every user
    store that token securely inside the database
    create a link which includes that secure token and user info 
    send that link to users email address
    notify user to look inside the email to get the login link 
     */
    const {email}=req.body
    let user = await UserModel.findOne({email});
    if(!user){
        user = await UserModel.create({email})
    }
    const userId=user._id.toString()
    //remove the token for existing user
    await VerificationTokenModel.findOneAndDelete({userId})
    await VerificationTokenModel.create({
        userId:user._id.toString(),
        token:randomToken,
    })

    const link = `http://localhost:9000/verify?token=${randomToken}&userId=${userId}`;

    mail.sendVerificationMail({
        link,
        to:user.email,
    })

    res.json({ message: "Please check you email for link." });
}

module.exports = {
    generateAuthLink
};