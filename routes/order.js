const checkout = require('../controller/orderController')

const Router =require('express').Router()



Router.post('/checkout',checkout)
module.exports=Router
