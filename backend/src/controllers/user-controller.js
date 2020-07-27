'use strict'

// Libs
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// services
const authService = require('../services/auth-service');

// Models
const User = mongoose.model('User');

// Auxiliars
const ValidationContract = require('../validators/validators');
const repository = require('../repository/user-repository');
const repositoryCart = require('../repository/cart-repository');
const repositoryPet = require('../repository/pet-repository.js');

// Helpers
const Role = require('../helpers/role');

mongoose.set('useFindAndModify', false);

/**
 * @function get
 * @route 
 * @param { JSON } req : no used
 * @param { JSON } res : send stats 200 ok or 500 fail. 
 * @return { JSON[] } res.data : All services 
 */
exports.get = async(req, res, next) => {
    try {
        const data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao busca usuários',
        });
    }
}

/**
 * @function get
 * @route 
 * @param { JSON } req : no used
 * @param { JSON } res : send stats 200 ok or 500 fail. 
 * @return { JSON[] } res.data : All services 
 */
exports.getAdmins = async(req, res, next) => {
    try {
        const data = await repository.getAdmins();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao busca usuários',
        });
    }
}

/**
 * @route GET users/perfil/:username
 * @obj Get info user
 * @acess private
 */
exports.getById = (req, res, next) => {
    User
        .findById(req.params.id) 
        .then(data => {
            return res.status(200).json(data);
        }).catch(e =>  {
            res.status(400).send({
                message: 'Falha ao buscar user',
                data: e
            });
        });
    }

exports.getByUsername = (req, res, next) => {
    User
        .findById(req.params.id) 
        .then(data => {
            return res.status(200).json(data);
        }).catch(e =>  {
            res.status(400).send({
                message: 'Falha ao buscar user',
                data: e
            });
        });
}
    
/**
 * @route POST http://localhost:3001/users/newUser/register
 * @obj Register user
 * @acess public
 */
exports.register = async(req, res, next) => {
    try {
        // Validate Admin
        let role = Role.User; // Default: User
        const isAdmin = await User.findOne({token: req.body.token});
        
        if(isAdmin) {
            if(isAdmin && isAdmin.role === Role.Admin) {
                role = req.body.role; // If the user is Admin, the role is custumizable
            }
        }
        
        // Validate Params
        const user = { 
            username: req.body.username, 
            email: req.body.email, 
            password: req.body.password,
            cpassword: req.body.cpassword,
            tel: req.body.tel,
            born: req.body.born,
            filepath: req.body.filepath,
            address: req.body.address,
            role: role,
        };
        
        let contract = new ValidationContract();
        
        // Ensure Min, Max Length of input and formatation
        contract.isEmail(user.email, 'O email não é válido');
        contract.hasMinLen(user.username, 4, 'O username não tem menos de 5 caracteres.');
        contract.hasMinLen(user.address, 10, 'O endereço não contém informações suficientes.');
        contract.hasMinLen(user.password, 9, 'Senha muito curta');
        contract.hasMaxLen(user.username, 15, 'O username ultrapassou o limite de 9 caractes.');
        contract.hasMaxLen(user.address, 100, 'O endereço ultrapassou o limite de caracteres(50).');
        contract.hasMaxLen(user.password, 20, 'Senha pode conter até 20 caracteres');
        contract.hasSpace(user.password, 'Espaço não é permitida na senha.');
        contract.isEqual(user.password, user.cpassword, 'Senhas diferentes.');
        contract.isDate(user.born, 'Data de nascimento inválida');
        
        // If one validation Fail, return error 400 and a message
        if(!contract.isValid()) {
            return res.status(400).json({
                message: contract.firstError().message,
            })
        }
        
        // Check if username already exist in database
        await User.
        findOne({username: user.username}).then(user => {
            if(user) {
                return res.status(400).json({
                    message: 'Username já foi escolhido.'
                });
            }
        });
        
        // Check if email already exist in database
        await User.
        findOne({email: user.email}).then(user => {
            if(user) {
                return res.status(400).json({
                    message: 'Email já foi registrado.'
                });
            }
        });
    
        // Create Cart
        const cart = await repositoryCart.create({
            products: [],      
        });
        user.cartId = cart._id;
        
        const newUser = await new User(user);
        
        // Generate token
        const token = await authService.generateToken({
            "id": newUser._id,
            "email": newUser.email,
            "username": newUser.username
        });

        // hash passport
        bcrypt.genSalt(global.SALT_NUMBER, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if(err)
                    throw err;
                    newUser.password = hash;
                    newUser.save()
                    .then(_ => {
                        res.status(201).send({
                            id: newUser._id,
                            username: newUser.username,
                            email: newUser.email,
                            token: token,
                            role: newUser.role,
                            message: 'User cadastrado com sucesso!'
                        });
                    }).catch(e =>  {
                        return res.status(400).send({
                            message: 'Falha ao cadastrar-se',
                            data: e
                        });
                    });
                });
            });
    } catch(e) {
        return res.status(400).send({
            message: 'Falha ao criar usuário',
            data: e
        });
    }
};

/**
 * @route DELETE http://localhost:3001/users/delete/:id
 * @obj Delete user
 * @acess private
 */
exports.delete = async(req, res, next) => {
    User
        .findById(req.params.id, (err, user) => {
            if(err) {
                return res.status(400).send({
                    message: 'Falha ao deletar',
                    e: err
                });
            } else if(!user) {
                return res.status(404).send({
                    message: 'Usuário não encontrado'
                });
            } else {
                repositoryCart.remove(user.cartId);
                repositoryPet.remove(user.petsId);
                user.remove();
                return res.status(200).send({
                    message: 'Deletado',
                    id: req.params.id,
                });
            }

        });
};

/** 
 *  @param { String } req.email : email of user
 *  @param { String } req.password : password of user
 *  @return { JSON } info user and token to keep login 
 * */ 
exports.authenticate = async(req, res, next) => {
    try {
        // Find the user by email
        const user = await User.findOne({ 
            email: req.body.email,
        }); 
        
        // if no user was found then error
        if(!user) {
            res.status(404).send({
                message: 'Email inválido',
            });
            return;
        }
        
        // Generate token
        const token = await authService.generateToken({
            "id": user._id,
            "email": user.email,
            "username": user.username
        });
        
        // Compare passwords
        bcrypt.compare(req.body.password, user.password) 
        
        .then(isMatch => {
            if(isMatch) {
                repository.updateToken(user._id, token);
                res.status(201).send({
                        id: user._id,
                        username: user.username,
                        email: user.email,
                        address: user.address,
                        token: token,
                        role: user.role,
                        sucess: true,
                        message: 'Acesso liberado!'
                    });
                } else {
                    res.status(400).send({
                        message: 'Senha ou Usuários incorretos.',
                        sucess: false
                    });
                }
            }).catch(err => {
                res.status(400).send({
                    message: 'Senha ou Usuários incorretos.',
                    sucess: false,
                    data: user
                });
            });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao autenticar user'
        });
    }
};
