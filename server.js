const express = require ('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');

const connectDB = require('./server/database/connection');

const app = express();

dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 8080

//mongod db connection
connectDB();

//log requests
app.use(morgan('tiny'));

//pass request to bodyparser
app.use(bodyparser.urlencoded({extended: true}));

//set view
app.set("view engine", "ejs")

//load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

//load routers
app.use('/', require('./server/routes/router'))

//running the server
app.listen(3000, ()=> {console.log(`Server is running on http://localhost:${PORT}`)});