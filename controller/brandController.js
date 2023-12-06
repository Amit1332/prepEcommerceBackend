const brand = require("../models/brandModel")

const createBrand = async(req,res)=>{
try {
    let data = req.body
    let brandData = await brand.create(data)
    res.status(200).json({success:true,data:brandData,msg:"Brand created successfully"})
} catch (error) {
    console.log(error);
}
}
const brandData = async(req,res)=>{
    const data  =await brand.find()
    res.status(200).json({success:true,data:data})

}



const getBrandCategoryByID= async(req,res)=>{
    try {
        const id = req.params.id
        const data  = await brand.find({categoryId:id})
        res.status(200).json({success:true,data:data ,count:data.length})
    } catch (error) {
        console.log(error);
    }

}
module.exports={createBrand,brandData,getBrandCategoryByID}