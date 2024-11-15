const nodemailer=require('nodemailer');



const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
    user: process.env.MAILTRAP_TEST_USER,
    pass: process.env.MAILTRAP_TEST_PASSWORD,
    }
});

const mail={
    async sendVerificationMail(options){
        await transport.sendMail({
            to:options.to,
            from:process.env.VERIFICATION_MAIL,
            subject:"Verify your account",
            html:`<div>
            <p>Please click on <a href="${options.link}">this link</a> to verify your email.</p>
            </div>`
        });
    }
}

module.exports=mail;