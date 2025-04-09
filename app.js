var express = require('express');
require('./db');
var userRouters = require('./routers/userRouter');
var productRouters = require('./routers/productroute');
var app = express();


app.use(express.json());
// app.use(express.json()); this middleware is used to put datas
var port = 4000;

app.use('/api',userRouters);
app.use('/product',productRouters);

app.listen(port,()=>{
    console.log(`server is up and running in ${port}`)
})