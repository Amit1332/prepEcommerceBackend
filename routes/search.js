const search = require('../controller/searchController')

const Router =require('express').Router()

Router.get('/',search)


module.exports=Router
