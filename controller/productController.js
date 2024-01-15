const products = require("../models/productModel")



const allProducts = async(req,res)=>{
   try {
    const data = await products.find()
    res.status(200).json({success:true,data:data})
   } catch (error) {
    console.log(error);
   }

}

const productById = async(req,res)=>{
   try {
    const id = req.params.id
    const product=await products.findOne({_id:id})
    if(product){
       return res.status(200).json({success:true,data:product})

    }
    else{
        return  res.status(404).json({success:false,msg:"product not found"})
         
    }
   } catch (error) {
    console.log(error);
   }

}


const PoductByCatId = async(req,res)=>{
   try {
    const id = req.params.catId
    const product= await products.find({categoryId:id})
    if(product){
       return res.status(200).json({success:true,data:product,count:product.length})

    }
    else{
        return  res.status(404).json({success:false,msg:"product not found"})
         
    }
   } catch (error) {
    console.log(error);
   }
}


const createProduct = async(req,res)=>{
  try {
    const data = req.body
    const prod =  await products.create(data)
     res.send(prod)
   
  } catch (error) {
    console.log(error);
  }
}


const filterProduct = async(req,res)=>{
    try {
        const { brand, color, priceRange, childCategory ,catId} = req.body;
        const filter = {categoryId:catId};
        if (brand && brand.length > 0) {
            filter.brand = { $in: brand };
          }
          if (color && color.length > 0) {
            filter.color = { $in: color };
          }
         if (childCategory && childCategory.length>0) filter.childCategoryId = { $in: childCategory };
    
         if (priceRange && priceRange.length === 2) {
            filter.price = { $gte: priceRange[0], $lte: priceRange[1] };
          }
          
        const filteredProducts = await products.find(filter);

        res.status(200).json({success:true,data:filteredProducts,count:filteredProducts.length});
    } catch (error) {
        console.log(error);
    }
}

module.exports = {allProducts,productById,PoductByCatId,createProduct,filterProduct}