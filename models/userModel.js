const mongoose  =require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    mob:{
        type:String,
        
    },
    email: {
        type:String,
        require:[true,"Please Enter Email"],
        unique:true

    },
    password:{
        type:String,
        require:[true,"Please Enter Password should be min 5 char"]
    }
})

const User  = new mongoose.model("user",userSchema)
module.exports=User