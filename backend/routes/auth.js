const { generateAuthLink } = require('../controllers/auth');
const express=require('express');
const { emailValidationSchema,validate } = require('../middlewares/validator');
const authRouter=express.Router();


authRouter.post('/generate-link',
    validate(emailValidationSchema)
    ,generateAuthLink);


module.exports = authRouter;