const checkout = require('../controller/orderController')
const {auth}  = require('../middlewares/auth')

const Router =require('express').Router()



Router.post('/checkout',auth,checkout)
module.exports=Router
