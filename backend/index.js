const express=require('express');
require('dotenv').config();
const app=express();

const PORT=process.env.PORT || 9000;

app.use("/auth",authRouter)

app.listen(PORT,()=>{
    console.log(`App is running on port http://localhost:${PORT}`);
})