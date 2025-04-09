var express = require('express');
var dotenv = require('dotenv');
var userRouters = require('./routers/userRouter');
var productRouters = require('./routers/productroute');
var app = express();
dotenv.config();
require('./db');

// ajsdgsagdh
app.use(express.json());
// app.use(express.json()); this middleware is used to put datas
var port = process.env.PORT;
// 
app.use('/api',userRouters);
app.use('/product',productRouters);

app.listen(port,()=>{
    console.log(`server is up and running in ${port}`)
})