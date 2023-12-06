const Router =require('express').Router()
const user  = require('./user')
const product  = require('./product')
const category  = require('./category')
const brand  = require('./brand')
const color  = require('./color')

const search  = require('./search')
const order = require('./order')





Router.use('/user',user)
Router.use('/product',product)
Router.use('/category',category)
Router.use('/brand',brand)
Router.use('/color',color)
Router.use('/order',order)



Router.use('/search',search)





module.exports=Router



