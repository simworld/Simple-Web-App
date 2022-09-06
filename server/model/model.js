const mongoose = require('mongoose');

var prod_json = require('../database/products.json');


var schema = new mongoose.Schema({
    sku: {
        type: String,
        // required: true
    },
    name: {
        type: String,
        // required: true
    },
    price: {
        type: String,
        // required: true
    },
    shipping: {
        type: String,
        // required: true
    },
    type: {
        type: String,
        // required: true
    }
})

const ProdDB = mongoose.model('productsdb', schema)

//this function count the documents inside the collection and if the collection is empty, the product.json file will be inserted
ProdDB.countDocuments(function(err, items){
    if(items == 0){
        ProdDB.collection.insertMany(prod_json, function(err, result){
            if(err){
                console.log(err)
            }else{
                console.log('JSON inserted!')
            }
        }); 
    }else{
        console.log("Products already in the DB!")
    }
})

module.exports = ProdDB;