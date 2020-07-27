'use strict'

const express = require('express');
const authService = require('../services/auth-service');
const controllerPet = require('../controllers/pet-controller');  
const Role = require('../helpers/role');
const router = express.Router();

router.get('/', controllerPet.get);
router.get('/:id', authService.authorize(), controllerPet.getById);
router.get('/perfil/geral', authService.authorize(), controllerPet.getAllPets);
router.post('/', authService.authorize(), controllerPet.register);
router.put('/', authService.authorize(), controllerPet.put);
router.delete('/:id', authService.authorize(), controllerPet.delete);

module.exports = router;
