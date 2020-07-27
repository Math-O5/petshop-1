'use strict'

const express = require('express');
const authService = require('../services/auth-service');
const controllerUsers = require('../controllers/user-controller');  
const Role = require('../helpers/role');
const userRouter = express.Router();

userRouter.get('/', authService.authorize(Role.Admin), controllerUsers.get);
userRouter.get('/:id',  authService.authorize(), controllerUsers.getById);
userRouter.delete('/delete/:id',  authService.authorize(), controllerUsers.delete);
userRouter.post('/new/register', controllerUsers.register);
userRouter.post('/login', controllerUsers.authenticate);

module.exports = userRouter;
