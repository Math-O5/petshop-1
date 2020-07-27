'use strict'

const express = require('express');
const authService = require('../services/auth-service');
const controllerCart = require('../controllers/cart-controller');  
const Role = require('../helpers/role');
const router = express.Router();

router.get('/', authService.authorize(Role.Admin), controllerCart.get);
router.get('/buy', authService.authorize(), controllerCart.getById);
router.post('/', authService.authorize(), controllerCart.post);
router.post('/buy', authService.authorize(), controllerCart.buy);
router.delete('/:id', authService.authorize(), controllerCart.delete);

module.exports = router;
