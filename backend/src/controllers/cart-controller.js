    'use strict'
const repository = require('../repository/cart-repository');
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
            message: 'Falha ao buscar',
        });
    }
}

exports.getById = async(req, res, next) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    try {
        const data = await authService.decodeToken(token);
        const user = await User.findById(data.id);
   
        if(!user) {
            res.status(500).send({
                message: 'Falha ao buscar usuário',
            });
        }

        const cart = await repository.getByCartId(user.cartId);
        res.status(200).send(cart);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao buscar carrinho',
        });
    }
}

/**
 *  @param { String } token : the token given to the user in the login
 *  @param { ObjectId } productId : the id you want to add
 *  @param { Number } quantity : the quantity you wanna add
 *  @return { JSON = {message, Cart } } cart : the new state of cart 
 * 
 *  Insert products
 * */ 
exports.post = async(req, res, next) => {    
    let item = { 
        productId: req.body.productId, 
        quantity: req.body.quantity, 
    };
    
    // Validate input
    let contract = new ValidationContract();
    contract.hasMinValue(item.quantity, 0, 'O carrinho não pode ficar negativo');
    
    if(!contract.isValid()) {
        return res.status(400).json({
            message: contract.firstError().message,
        })
    }

    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    
    try {      
        const data = await authService.decodeToken(token);
        const user = await User.findById(data.id);

        if(!user) {
            return res.status(400).send({
                message: 'Usuário não encontrado',
            });
        }
        item.cartId = user.cartId;
        
        let cart = await Cart.findById(item.cartId);
        let {title, price } = await Product.findById(item.productId, 'title price');
        item.title = title; item.price = price; 

        await repository.add(cart, item);

        return res.status(201).send({
            message: 'Item adicionado ao carrinho'
        });
    } catch(e) {
        return res.status(500).send({
            message: 'Item não adicionado ao carrinho'
        });
    }
};

exports.delete = async(req, res, next) => {    
    let productId = req.params.id;
    
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
        
        cart.products = [];
        // await repository.removeProduct(cart, productId);

        return res.status(200).send({
            message: 'Item removido ao carrinho'
        });
    } catch(e) {
        return res.status(500).send({
            message: 'Item não foi removido do carrinho'
        });
    }
};

exports.buy = async(req, res, next) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    let result;
    try {
        const data = await authService.decodeToken(token);
        const user = await User.findById(data.id);
        let cart = await Cart.findOne({'_id': user.cartId}, 'productId');

        if(true) {
            return res.status(400).send({
                cart: cart,
                type: typeof cart,
                message: 'Usuário não encontrado',
            });
        }

        // result = await cart.products.find({}, 'productId');
        let products = await Product.updateMany({
                '_id' :  { $in: cart }
                }, { $inc: { quantity: -cart.quantity }}, function(err, product) {
                if(err) {
                    return res.status(500).send({
                        prod: product,
                        message: 'Falha ao buscar usuário',
                        e: err,
                    });
            }
        });

        return res.status(200).send({
            message: 'success',
        });
    } catch(e) {
        return res.status(400).send({
            message: 'error',
            e: e,
        });
    }
}