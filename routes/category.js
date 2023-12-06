const {categoryData, createCategory, createChildCategory, ChildCategoryData, getChildCategoryByID} = require('../controller/categoryController')

const Router =require('express').Router()


Router.get('/',categoryData)
Router.post('/create',createCategory)
Router.post('/childcat/create',createChildCategory)
Router.get('/childcategory',ChildCategoryData)
Router.get('/childcategory/:id',getChildCategoryByID)









module.exports=Router



