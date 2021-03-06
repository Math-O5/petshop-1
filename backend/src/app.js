'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const db = require('../config').mongoURI;

const app = express();
const router = express.Router();
app.use(cors());

/**
 * @param { String } db is the URL do banco
 * @param { JSON }
 * 
 * Here need have Mongo db Atlas to work out.
 */
mongoose.connect(db,  {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

/**
 * Load the Models on constants.
 */
const Service = require('./models/service');
const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const Pet = require('./models/pet');

/**
 * Load Routes
 */ 
const routesApp = require('./routes/index');
const routesService = require('./routes/service');
const routesUser = require('./routes/user');
const routesProduct = require('./routes/product');
const routesAdmin = require('./routes/admin');
const routesCart = require('./routes/cart');
const routesPet = require('./routes/pet');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

/**
 * Routes active in the app
 */
app.use('/', routesApp);
app.use('/service', routesService);
app.use('/product', routesProduct);
app.use('/user', routesUser);
app.use('/cart', routesCart);
app.use('/admin', routesAdmin);
app.use('/pet', routesPet);

module.exports = app;