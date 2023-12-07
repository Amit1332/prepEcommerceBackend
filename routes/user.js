
const Router =require('express').Router()
const { login, signup, profile } = require('../controller/userController')
const {auth}  = require('../middlewares/auth')




Router.get('/loaduser',profile)

Router.post('/login',login)

Router.post('/signup',signup)


module.exports=Router



