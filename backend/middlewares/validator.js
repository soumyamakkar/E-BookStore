const z=require('zod');



const emailValidationSchema={
    email:z.string({
        required_error:'Email is missing'
    }).email("Enter a valid email id!")
}

const validate=(obj)=>{
    return (req,res,next)=>{
        const schema=z.object(obj)
        const result=schema.safeParse(req.body);

        if(result.success){
            req.body=result.data;
            next();
        }else {
        const errors=result.error.flatten().fieldErrors
        return res.status(422).json(errors)
        }
    }
}

module.exports={emailValidationSchema,validate};