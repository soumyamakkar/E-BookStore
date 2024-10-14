import { generateAuthLink } from '../controllers/auth';

const express=require('express');


const authRouter=express.Router();

authRouter.post('/generate-link', generateAuthLink);


export default authRouter