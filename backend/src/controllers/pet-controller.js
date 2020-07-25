'use strict'

const repository = require('../repository/pet-repository');
const ValidationContract = require('../validators/validators');
const Product = require('../models/product');
const User = require('../models/user');
const Cart = require('../models/cart');
const authService = require('../services/auth-service');

exports.get = async(req, res, next) => {
    try {
        let data = await repository.get()
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao buscar pets',
        });
    }
}

exports.getById = async(req, res, next) => {
    try {
        const pet = await Pet.findById(req.params.id);
    
        if(!pet) {
            res.status(404).send({
                message: 'Falha ao buscar o pet',
            });
        }
        res.status(200).send(pet);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao buscar o pet',
        });
    }
}

/**
 *  @param { String } token : the token given to the user in the login
 *  @param { ObjectId } productId : the id you want to add
 *  @param { Number } quantity : the quantity you wanna add
 *  @return { JSON = {message, Cart } } cart : the new state of cart 
 * 
 *  Insert pets
 * */ 
exports.register = async(req, res, next) => {    
    let pet = { 
        name: req.body.name, 
        age: req.body.age,
        race: req.body.race, 
        description: req.body.description,
        filepath: req.body.filepath,
    };
    
    // Validate input
    let contract = new ValidationContract();
    contract.hasMinValue(pet.age, 0, 'O animal pode no minimo ter 0 ano');
    contract.hasMinLen(pet.name, 0, 'O nome do pet é obrigatório');
    contract.hasMinLen(pet.description, 10, 'Precisamos de uma breve descrição do seu pet');
    contract.hasMaxLen(pet.name, 20, 'O nome do pet execeu o limite de caracteres(20)');
    contract.hasMaxLen(pet.description, 150, 'A descrição do pet execedeu o limite de caracteres(20)');
    
    if(!contract.isValid()) {
        return res.status(400).json({
            message: contract.firstError().message,
        })
    }

    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    
    try {      
        // Retrieve user
        const data = await authService.decodeToken(token);
        const user = await User.findById(data.id);

        if(!user) {
            return res.status(400).send({
                message: 'Usuário não encontrado',
            });
        }
        await repository.add(user, pet);

        return res.status(201).send({
            user: user,
            pet: pet,
            message: 'Pet registrado com sucesso',
        });
    } catch(e) {
        return res.status(500).send({
            message: 'O registro não foi finalizado',
        });
    }
   
};

exports.delete = async(req, res, next) => {    
    let productId = req.body.productId;
    
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    
    try {      
        const data = await authService.decodeToken(token);
        const user = await User.findById(data.id);

        if(!user) {
            return res.status(400).send({
                message: 'Usuário não encontrado',
            });
        }
        
        let cart = await Cart.findById(user.cartId);

        await repository.removeProduct(cart, productId);

        return res.status(200).send({
            message: 'Item removido ao carrinho'
        });
    } catch(e) {
        return res.status(500).send({
            message: 'Item não foi removido do carrinho'
        });
    }
};
