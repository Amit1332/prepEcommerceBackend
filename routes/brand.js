const { createBrand, brandData, getBrandCategoryByID } = require('../controller/brandController')

const Router =require('express').Router()



Router.get('/',brandData)
Router.post('/create',createBrand)
Router.get('/category/:id',getBrandCategoryByID)









module.exports=Router



