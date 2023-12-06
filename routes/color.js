const { colorData, createColor } = require('../controller/colorController')

const Router =require('express').Router()



Router.get('/',colorData)
Router.post('/create',createColor)









module.exports=Router



