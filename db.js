var  mongoose = require('mongoose');
mongoose.connect("mongodb+srv://ganashyamsethu57:gana@cluster0.peimhh1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>{
        console.log("CONNECTED TO DB")
    })
 .catch((err)=>{console.log(err)})