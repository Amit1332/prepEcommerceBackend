
const Router =require('express').Router()
const { login, signup } = require('../controller/userController')
const {auth}  = require('../middlewares/auth')




Router.get('/',auth)

Router.post('/login',login)

Router.post('/signup',signup)


module.exports=Router



