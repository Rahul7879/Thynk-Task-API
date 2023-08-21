const express = require("express")
const router = new express.Router();
const HeadPhone = require("../model/Product.js")


// ***********Add Data ********
router.post("/headphone/create", async(req,res)=>{
    try{
        const product = new HeadPhone(req.body);
        const createProduct = await product.save();
        res.status(201).send(createProduct);
    }catch(e){
        res.status(403).send(e);
    }

})

//  *************Retrieve Data *****************
router.get("/headphone/getall", async (req,res)=>{
    try{
        const data = await HeadPhone.find();
        res.status(200).send(data)
    }catch(e){
        res.status(404).send(e); 
    }
})

router.get("/headphone/getone/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const result = await HeadPhone.findById({_id:_id});
        res.status(200).send(result);
    }catch(e){
        res.status(404).send(e);
    }
})

// *********updata Data *******************

router.patch("/headphone/update/:id", async(req,res)=>{
    try{
       const _id = req.params.id;
       const result = await HeadPhone.findByIdAndUpdate(_id, req.body, {
        new:true
       })
       res.status(202).send(result);
    }catch(e){
        res.status(304).send("Heaphone Addtion Failed");
    }
})

// ************Delete Data **************

router.delete("/headphone/delete/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const result = await HeadPhone.findByIdAndDelete(_id);
        res.status(301).send(result);
 }catch(e){
     res.status(30).send(e);
 }
})

module.exports = router;

