const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

//route to home page
route.get('/', services.homeRoutes);

//route to insert page
route.get('/insert', services.insertProduct);

//route to update page
route.get('/update', services.updateProduct);

//route to about page
route.get('/about', services.aboutPage);

//api
route.post('/api/products', controller.create);
route.get('/api/products', controller.find);
route.put('/api/products/:id', controller.update);
route.delete('/api/products/:id', controller.delete);


module.exports = route
