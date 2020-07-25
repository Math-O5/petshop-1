'use strict'

const mongoose = require('mongoose');
const authService = require('../services/auth-service');
const User = mongoose.model('User');
const bcrypt = require('bcryptjs');
const ValidationContract = require('../validators/validators');
const repositsitory = require('../repository/user-repository');

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
        const data = await repositsitory.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao busca serviços',
        });
    }
}

/**
 * @route GET users/perfil/:username
 * @obj Get info user
 * @acess private
 */
exports.getByUsername = (req, res, next) => {
    User
        .findOne({
            username: req.params.username,
        }, 'id username email address role tel born petsId') 
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
exports.register = (req, res, next) => {
    const user = { 
        username: req.body.username, 
        email: req.body.email, 
        password: req.body.password,
        cpassword: req.body.cpassword,
        tel: req.body.tel,
        born: req.body.born,
        filepath: req.body.filepath,
        address: req.body.address,
        role: 'User',
    };

    let contract = new ValidationContract();

    contract.isEmail(user.email, 'O email não é válido');
    contract.hasMaxLen(user.username, 9, 'O username ultrapassou o limite de 9 caractes.');
    contract.hasMinLen(user.username, 5, 'O username não tem menos de 5 caracteres.');
    contract.hasMinLen(user.address, 10, 'O endereço não contém informações suficientes.');
    contract.hasMinLen(user.password, 9, 'Senha muito curta');
    contract.hasSpace(user.password, 'Espaço não é permitida na senha.');
    contract.isEqual(user.password, user.cpassword, 'Senhas diferentes.');
    contract.isDate(user.born, 'Data de nascimento inválida');

    // If one fail, return error 400 and message
    if(!contract.isValid()) {
        return res.status(400).json({
            message: contract.firstError().message,
        })
    }

    User.
        findOne({username: user.username}).then(user => {
            if(user) {
                return res.status(400).json({
                    message: 'Username já foi escolhido.'
                });
            }
        });

    User.
        findOne({email: user.email}).then(user => {
            if(user) {
                return res.status(400).json({
                    message: 'Email já foi registrado.'
                });
            }
        });

        
    /** TODO: create carId */
    user.carId = 'adhjdADAdgaZCwan232hcui21bb';

    const newUser = new User(user);

    // hash passport
    bcrypt.genSalt(global.SALT_NUMBER, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err)
                throw err;
            newUser.password = hash;
            newUser.save()
                .then(_ => {
                    res.status(201).send({
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
};

/**
 * @route POST http://localhost:3001/users/login
 */
exports.login = (req, res, next) => {
    User
        .findOne({ email: req.body.email }) // search user by username
        .then(user => {
            if(!user) {
                return res.status(400).json({
                    message: 'Usuário não encontrado.',
                    sucess: false,
                    data: req.body,
                });
            }

            bcrypt.compare(req.body.password, user.password) // compare passwords
                  .then(isMatch => {
                      if(isMatch) {
                          
                        // return token
                        const data = {
                            username: user.username,
                            email: user.email,
                        }
                        res.status(200).send({
                            data: data,
                            sucess: true,
                            message: 'acesso liberado',
                        });
                      } else {
                        res.status(400).send({
                            message: 'Senha ou Usuários incorretos.',
                            sucess: false,
                        });
                      }
                  });
        }).catch(e =>  {
            res.status(400).send({
                message: 'Usuário não encontrado.',
                sucess: false,
                data: e
            });
        });
}

/**
 * @route DELETE http://localhost:3001/users/delete/:id
 * @obj Delete user
 * @acess private
 */
exports.delete = (req, res, next) => {
    User
        .findOneAndDelete(req.params.id)
        .then(x => {
            res.status(200).send({
                message: 'Deletado.'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao deletar.',
                data: e
            });
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
                repositsitory.updateToken(user._id, token);
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

