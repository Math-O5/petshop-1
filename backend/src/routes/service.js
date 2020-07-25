'use strict'

const express = require('express');
const controllerServices = require('../controllers/service-controller');  
const router = express.Router();
const authService = require('../services/auth-service');
const Role = require('../helpers/role');

router.get('/', controllerServices.get);
router.get('/:id', controllerServices.getById);
router.get('/slug/:slug', controllerServices.getBySlug);
router.get('/partner/hours/', controllerServices.getByPartnerHours);
router.post('/', authService.authorize(Role.Admin), controllerServices.post);
router.put('/:id', authService.authorize(Role.Admin), controllerServices.put);
router.delete('/:id', authService.authorize(Role.Admin), controllerServices.delete);

module.exports = router;
