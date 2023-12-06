const mongoose  =require('mongoose')

const colorSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter color"]
    },

})

const color = new mongoose.model("color",colorSchema)
module.exports= color