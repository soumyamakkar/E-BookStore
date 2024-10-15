const mongoose=require('mongoose');
require('dotenv').config();
const uri=process.env.MONGO_URI

if(!uri) throw new Error("Database URI is missing")

const dbConnect=()=>{
    mongoose.connect(uri).then(()=>{
        console.log('db connected!')
    }).catch((error)=>{
        console.log('db connection failed: ',error.message);
    })
};

module.exports={dbConnect};