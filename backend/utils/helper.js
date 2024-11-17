const sendErrorResponse=({res,message,status})=>{
    res.status(status).json({ message });
};

module.exports={ sendErrorResponse };
