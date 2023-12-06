const color = require("../models/colorModel");

const createColor = async(req,res)=>{
    try {
        let data = req.body
        let brandData = await color.create(data)
        res.status(200).json({success:true,data:brandData,msg:"Color created successfully"})
    } catch (error) {
        console.log(error);
    }
    }

    const colorData = async(req,res)=>{
        const data  =await color.find()
        res.status(200).json({success:true,data:data})
    
    }


    module.exports = {createColor,colorData}