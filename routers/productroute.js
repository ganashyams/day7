var express =require ('express');
var Router = express.Router();
const productModel = require('../model/product')

Router.post('/',(req,res)=>{
    try{
     
       productModel(req.body).save();
         res.send("product added")
        }catch(error) {
res.send(error)
        }
    })
   
    Router.get('/product',async(req,res)=>{
        try{
            var data=await productModel.find();
            res.send(data)
        }
        catch (error) {
            res.send(error)
        }
    })
    Router.delete('/:id',async(req,res)=>{
    
    try{
        console.log(req.params.id);
        await productModel.findByIdAndDelete(req.params.id);
          res.send("product deleted")   
    }
    catch (error) {
            res.send(error)
        
    }})


  Router.put('/:id',async(req,res)=>{
        try {
            await productModel.findByIdAndUpdate(req.params.id,req.body);
            res.send("edited")
        } catch (error) {
            res.send(error)
            
        }
    })
    
    
    module.exports = Router