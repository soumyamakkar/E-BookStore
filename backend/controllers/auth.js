const crypto=require('crypto');

const generateAuthLink=(req,res)=>{
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
}

module.exports = {
    generateAuthLink
};