require('express-async-errors');
require("./db/connect");
const express=require('express');
const authRouter=require('./routes/auth');
const errorHandler = require("./middlewares/error");
require('dotenv').config();
const app=express();

const PORT=process.env.PORT || 9000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/auth",authRouter);

app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`App is running on port http://localhost:${PORT}`);
})