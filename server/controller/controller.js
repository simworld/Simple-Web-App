//require ProdDB from the model file
var ProdDB = require('../model/model');

//add new product
exports.create = (req, res)=>{
const product = new ProdDB({
    sku: req.body.sku,
    name: req.body.name,
    price: req.body.price,
    shipping: req.body.shipping,
    type: req.body.type
})

product
    .save(product)
    .then(data => {
        // res.send(data)
        res.redirect('/insert')
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message
        });
    })
}

//get all products
exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;
        ProdDB.findById(id)
           .then(data =>{
               if(!data){
                   res.status(404).send({message:'Cannot found the product!'})
               }else{
                   res.send(data)
               }
           })
    }else{
    ProdDB.find().limit(300) // limit to 300 items
      .then(product=>{
        res.send(product)
    })
    .catch(err=>{
        res.status(500).send({message:err.message})
    })
    }
    

}

//update product
exports.update = (req, res)=>{
    const id = req.params.id;
    ProdDB.findByIdAndUpdate(id, req.body,{useFindAndModify: false})
    .then(data=>{
        if(!data){
            res.status(404).send({message:'product not found'})
        }else{
            res.send(data)
        }
    })
}

//delete product
exports.delete = (req, res)=>{
    const id = req.params.id;
    ProdDB.findByIdAndDelete(id)
    .then(data =>{
       if(!data){
            res.status(404).send({message:'cannot delete the product!'})
        }else{
            res.send({
                message:'product deleted!'
            })
        } 
    })
}