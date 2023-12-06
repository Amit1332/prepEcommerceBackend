const mongoose  = require('mongoose')

const database = ()=>{
   try {
    mongoose.connect(`${process.env.mongoURI}`).then(()=>{
        console.log("connection successfull");
    }).catch((error)=> console.log("no connection"))
   } catch (error) {
    console.log('sorry');
   }
}


module.exports = database

