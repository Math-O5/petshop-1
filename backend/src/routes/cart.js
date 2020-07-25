'use strict'

const express = require('express');
const authService = require('../services/auth-service');
const controllerCart = require('../controllers/cart-controller');  
const Role = require('../helpers/role');
const router = express.Router();

router.get('/', authService.authorize(Role.Admin), controllerCart.get);
router.get('/:userId', authService.authorize(), controllerCart.getByUserId);
router.post('/', authService.authorize(), controllerCart.post);
router.delete('/', authService.authorize(), controllerCart.delete);

module.exports = router;
