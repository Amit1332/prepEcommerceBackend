const {hashPassword,generateToken, comparePassword} = require('../middlewares/middleware')
const User = require('../models/userModel')


const profile = async(req,res)=>{
    try {
     const userDetail = req.user
   
    res.send(userDetail)
    } catch (error) {
        console.log(error);
    }
}



const login =async (req,res)=>{
    const data = req.body
  
    if(!data.email || !data.password){
        return res.json({success:false,info:"please fill with email and Password"})  
    }
   const userData = await User.findOne({email:data.email})

   if(userData){
    const checkPass =await comparePassword(data.password,userData.password)

    if(checkPass){
    const token =await generateToken(userData)
    return res.status(200).json({success:true,msg:"Login Successfully", token:token})

    }
    else{
        return res.json({success:false,info:"Invalid email or password"})

    }

   }
   else{
    return res.json({success:false,info:"Please Signup First"})

   }
}




const signup =async (req,res)=>{
    const data = req.body
    if(!data.mob || !data.email || !data.password){
        return res.json({success:false,info:"please fill with email and Password"})
    
    }
    if(data.mob.length<10 || data.mob.length>10){
        return res.json({success:false,info:"mob no. must be min & max 10"})
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{5,20}$/;
    if (!passwordRegex.test(data.password)) {
        return res.json({ success: false, info: "Password must be between 5 and 20 characters and include at least one uppercase letter, one lowercase letter, and one special character" });
    }
    const isExist =await User.findOne({email:data.email})
    if(isExist){
        return res.json({success:false,info:"user already exist"})
    }
     data.password =await hashPassword(data.password)

    //  User.create(data)
    const token =await generateToken(data)
    res.status(200).json({success:true,msg:"Register Successfully", token:token})

}

module.exports = {profile,login,signup}