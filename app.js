const express =require('express')
const dotenv = require('dotenv')
const routes =require('./routes/index')
const cors = require('cors')
const database = require('./config/db')

const app = express()
app.use(express.static('client'));
app.use(express.json());

dotenv.config()
  
app.use(cors({
    origin:'*'
}))

app.use('/api/v1/',routes)
app.get('/api/v1/config/paypal',(req,res)=>{
    res.send(process.env.PAYPAL_CLIENT_ID)
})

app.listen(`${process.env.PORT}`,async()=>{
    try {
    console.log(`server is running on port ${process.env.PORT}`);
     await database()
        
    } catch (error) {
        console.log(error,"No Connection");
    }
})

