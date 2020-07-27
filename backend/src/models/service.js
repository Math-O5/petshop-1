'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const service = new Schema({
    title: {
        type: String,
        required: [true, 'O título é obrigatório'],
        trim: true
    },
    slug: {
        type: String,
        required: [true, 'O slug é obrigatório'],
        trim: true,
        index: true,
        unique: true
    },
    description: {
        type: String,
        required: [true, 'A descrição é obrigatória']
    },
    partner: {
        type:String,
        Required: [true, 'O nome do profissional que presta o serviço é obrigatório']
    },
    price: {
        type: Number,
        required: [true, 'O preço é obrigatório']
    },
    filepath: {
        type:String,
        Required: [true, 'A imagem é obrigatória']
    },
    free: [{
        type: String,
        hours: [{
            type: Number,
        }]
    }],
    busy: [{
        type: String,
        hours: [{
            type: Number,
        }]
    }],
}, { timestamps: true });
 
module.exports = mongoose.model('Service', service);