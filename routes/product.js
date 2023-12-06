const { allProducts, productById ,PoductByCatId, createProduct, filterProduct} = require('../controller/productController')

const Router =require('express').Router()



// create product
Router.post('/create',createProduct)


// all product
Router.get('/',allProducts)


// single product
Router.get('/:id',productById)



// category wise product
Router.get('/category/:catId',PoductByCatId)


Router.post('/filter/product',filterProduct)


module.exports=Router



