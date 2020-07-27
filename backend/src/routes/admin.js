'use strict'

const express = require('express');
const authService = require('../services/auth-service');
const controllerAdmin = require('../controllers/user-controller');  
const Role = require('../helpers/role');
const router = express.Router();

router.get('/', authService.authorize(Role.Admin), controllerAdmin.getAdmins);
router.get('/:id',  authService.authorize(Role.Admin), controllerAdmin.getById);
router.delete('/delete/:id', authService.authorize(Role.Admin), controllerAdmin.delete);
router.post('/new/register/', authService.authorize(Role.Admin), controllerAdmin.register);
router.post('/login', controllerAdmin.authenticate);

module.exports = router;
