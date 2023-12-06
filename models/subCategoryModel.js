const mongoose  =require('mongoose')

const childCategorySchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter category name"]
    },
    categoryId:{ type: mongoose.Schema.Types.ObjectId, ref: 'category' }
})

const childcategory = new mongoose.model("childCategory",childCategorySchema)

module.exports= childcategory