const mongoose  =require('mongoose')


const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true

    },
    description : {
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    discountPercentage:{
        type:Number,
        required:true
    },
    rating: {
        type:Number,
        required:true
    },
    stock: {
        type:Number,
        required:true
    },
    brand:{
        type:String,

    },
    category: {
        type:String,
        required:true
    },
    actual_price:{
        type:Number,
        required:true
    },
    brand:{ type: mongoose.Schema.Types.ObjectId, ref: 'brand' },

    color:{ type: mongoose.Schema.Types.ObjectId, ref: 'color' },

    categoryId:{ type: mongoose.Schema.Types.ObjectId, ref: 'category' },
    childCategoryId:{ type: mongoose.Schema.Types.ObjectId, ref: 'childCategory' }

    ,
    thumbnail: {
        type:String,
        required:true
    },

    specification:{
        type:Object,
        required:true
    },
        
    images: {
        type:Array,
        required:true
    }
})

const product = new mongoose.model('product',productSchema)
module.exports=product