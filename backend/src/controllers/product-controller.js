'use strict'

const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const repository = require('../repository/product-repository');
const ValidationContract = require('../validators/validators');

exports.get = async(req, res, next) => {
    try {
        let data = await repository.get()
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao busca produtos',
        });
    }
}

exports.getById = async(req, res, next) => {  
    try {      
        const prod = await repository.getById(req.params.id);

        if(!prod) {
            return res.status(400).send({
                id: req.params.id,
                prod: prod,
                message: 'Produto não encontrado',
            });
        }
        
        res.status(200).send(prod);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao buscar produto',
        });
    }       
}

exports.getBySlug = async(req, res, next) => {
    try {
        const data = await repository.getBySlug(req.body.slug)
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao buscas produtos',
        });
    }
}

exports.getByType = async(req, res, next) => {
    try {
        const data = await repository.getByType(req.params.type);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao buscas produtos',
        });
    }
}

exports.post = async(req, res, next) => {
    let contract = new ValidationContract();

    const product = {
        title: req.body.title,
        slug: req.body.slug,
        description: req.body.description,
        filepath: req.body.filepath,
        price: req.body.price,
        brand: req.body.brand,
        animals: req.body.animals,
        quantityStore: req.body.quantityStore,
        quantitySold: 0,
        type: req.body.type,
    }

    contract.hasMinLen(product.title, 3, 'O nome do produto é muito curto. No mínimo 3 caracteres');
    contract.hasMinLen(product.slug, 3, 'O slug é muito curto. No mínimo 3 caracteres');
    contract.hasMinLen(product.description, 3, 'A descrição é muito curta. No mínimo 3 caracteres');
    contract.hasSpace(product.slug, 'O Slug não pode haver espaçoes');
    contract.isNumber(product.quantityStore, 'A quantidade em estoque deve ser um número');
    contract.isNumber(product.price, 'O valor é um número');
    contract.hasMinValue(product.quantityStore, 0, 'O estoque já está vazio');

    // If one fail, return error 400 and message
    if(!contract.isValid()) {
        return res.status(400).json({
            message: contract.firstError().message,
            errors: contract.errors()
        })
    }
  
    try {
        let data = await repository.create(product)
        res.status(201).send({
            message: 'Produto cadastrado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao cadastrar produto',
        });
    }
};

exports.put = async(req, res, next) => {
    let contract = new ValidationContract();

    const product = {
        title: req.body.title,
        slug: req.body.slug,
        description: req.body.description,
        filepath: req.body.filepath,
        price: req.body.price,
        quantityStore: req.body.quantityStore,
        quantitySold: 0,
        type: req.body.type,
    }

    contract.hasMinLen(product.title, 3, 'O nome do produto é muito curto. No mínimo 3 caracteres');
    contract.hasMinLen(product.slug, 3, 'O slug é muito curto. No mínimo 3 caracteres');
    contract.hasMinLen(product.description, 3, 'A descrição é muito curta. No mínimo 3 caracteres');
    contract.hasSpace(product.slug, 'O Slug não pode haver espaçoes');
    contract.isNumber(product.quantityStore, 'A quantidade em estoque deve ser um número');
    contract.isNumber(product.quantitySold, 'A quantidade vendida deve ser um número');
    contract.isNumber(product.price, 'O valor é um número');
    contract.hasMinValue(product.quantityStore, 0, 'O estoque já está vazio');

    // If one fail, return error 400 and message
    if(!contract.isValid()) {
        return res.status(400).json({
            message: contract.firstError().message,
        });
    }
  
    try {
        let data = await repository.update(req.params.id, product);
        res.status(200).send({data});
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao atualizar produto',
            errors: contract.errors()
        });
    }
};

exports.delete = async(req, res, next) => {
    try {
        let data = await repository.delete(req.params.id) 
        res.status(200).send({data});
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao atualizar.',
        });
    }
};