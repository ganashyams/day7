var express =require ('express');
  
var Router = express.Router();
var userMOdel = require('../model/user');
Router.post('/',(req,res)=>{
    try{
        console.log(req.body)
        userMOdel(req.body).save();
         res.send("data added")
        }catch(error) {
res.send(error)
        }
    })
    // api to login
    Router.post('/login',async(req,res)=>{
      
            const user = await userMOdel.findOne({email:req.body.email})
            if(!user){
                return res.send("user not found")
            }
            try{
                if (user.password ===req.body.password){
                    res.send("Login successful!!")
                }else{
                    res.send("Invalid credentials")
                }
            }catch (error){
                res.send(error)
            }
        

    })
    module.exports = Router
