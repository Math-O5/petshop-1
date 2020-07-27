'use strict'

const express = require('express');
const controllerProducts = require('../controllers/product-controller');  
const router = express.Router();
const authService = require('../services/auth-service');
const Role = require('../helpers/role');

router.get('/', controllerProducts.get);
router.get('/:id', controllerProducts.getById);
router.get('/slug/', controllerProducts.getBySlug);
router.get('/type/:type', controllerProducts.getByType);
router.post('/', authService.authorize(Role.Admin), controllerProducts.post);
router.put('/:id', authService.authorize(Role.Admin), controllerProducts.put);
router.delete('/:id', authService.authorize(Role.Admin), controllerProducts.delete);

module.exports = router;

