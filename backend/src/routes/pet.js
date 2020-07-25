'use strict'

const express = require('express');
const authService = require('../services/auth-service');
const controllerPet = require('../controllers/pet-controller');  
const Role = require('../helpers/role');
const router = express.Router();

router.get('/', authService.authorize(Role.Admin), controllerPet.get);
router.get('/:id', authService.authorize(), controllerPet.getById);
router.post('/', authService.authorize(), controllerPet.register);
router.delete('/', authService.authorize(), controllerPet.delete);

module.exports = router;
