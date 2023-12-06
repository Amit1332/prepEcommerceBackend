const mongoose  =require('mongoose')

const brandSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter brand name"]
    },
    categoryId:{ type: mongoose.Schema.Types.ObjectId, ref: 'category' }

})

const brand = new mongoose.model("brand",brandSchema)

module.exports= brand