const res = require("express/lib/response");
const axios = require('axios')

//callback function to render the index page
exports.homeRoutes = (req, res) => {
    axios.get('http://localhost:3000/api/products')
        .then(function(response){
            res.render('index', { products : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}

//callback function to render insert page
exports.insertProduct = (req, res)=>{
    res.render('insert');
}

//callback function to render update page
exports.updateProduct = (req, res)=>{
    axios.get('http://localhost:3000/api/products', {params: {id:req.query.id}})
        .then(function(dataprod){
            res.render('update', {product : dataprod.data});
        })
        .catch(err=>{
            res.send(err);
        })
}

//callback function to render about page
exports.aboutPage = (req, res)=>{
        res.render('about');
}
