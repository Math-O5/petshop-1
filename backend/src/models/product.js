'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const product = new Schema({
    title: {
        type: String,
        required: [true, 'O título é obrigatório'],
        index: true,
        trim: true,
        unique: [true, 'O titulo do produto já existe']
    },
    slug: {
        type: String,
        required: [true, 'O slug é obrigatório'],
        trim: true,
        index: true,
        unique: [true, 'Esse Slug já existe'],
    },
    description: {
        type: String,
        required: [true, 'A descrição é obrigatória']
    },
    filepath: {
        type:String,
        Required: [true, 'A imagem é obrigatória']
    },
    price: {
        type: Number,
        required: [true, 'O preço é obrigatório']
    },
    quantityStore: {
        type: Number,
        required: [true, 'Informe a quantidade disponível']
    },
    quantitySold: {
        type: Number,
        default: 0,
    },
    type: [{
        type: String,
        required: true
    }],
    brand: {
        type: String,
        required: [true, 'A marca é obrigatória'],
    },
    animals: [{
        type: String,
        required: true
    }]
}, { timestamps: true });
 
module.exports = mongoose.model('Product', product);