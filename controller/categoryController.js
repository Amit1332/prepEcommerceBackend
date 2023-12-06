const category = require("../models/categoryModel")
const childcategory = require("../models/subCategoryModel")


const createCategory = async(req,res)=>{
try {
    let data = req.body
    let catData = await category.create(data)
    res.status(200).json({success:true,data:catData,msg:"category created successfully"})
} catch (error) {
    console.log(error);
}

}
const categoryData = async(req,res)=>{
    const data  =await category.find()
    res.status(200).json({success:true,data:data})

}


const createChildCategory = async(req,res)=>{
    let data = req.body
    let catData = await childcategory.create(data)
    res.status(200).json({success:true,data:catData,msg:"category created successfully"})


}

const ChildCategoryData = async(req,res)=>{
    try {
        const data  = await childcategory.find()
        res.status(200).json({success:true,data:data ,count:data.length})
    } catch (error) {
        console.log(error);
    }

}

const getChildCategoryByID= async(req,res)=>{
    try {
        const id = req.params.id
        const data  = await childcategory.find({categoryId:id})
        res.status(200).json({success:true,data:data ,count:data.length})
    } catch (error) {
        console.log(error);
    }

}


module.exports={categoryData,createCategory,createChildCategory,ChildCategoryData,getChildCategoryByID}