const category = require("../models/categoryModel");
const product = require("../models/productModel");

const search = async(req,res)=>{
    const query = req.query.q;
    const result = await Promise.all([
        product.aggregate([
          {
            $match: {
              $or: [
                { title: { $regex: new RegExp(query, 'i') } },
                { brand: { $regex: new RegExp(query, 'i') } },
              ],
            },
          },
        ]),
        category.aggregate([
          {
            $match: {
              name: { $regex: new RegExp(query, 'i') },
            },
          },
        ]),
      ]);
  
      const combinedResult = [...result[0], ...result[1]];
  
    res.json({data:combinedResult, count:combinedResult.length});
}


module.exports =search