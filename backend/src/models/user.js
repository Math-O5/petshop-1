/**
 * autor: Mathias Fernandes
 * nusp: 10734352
 * email pessoal: mathfern4@gmail.com
 * emailUSP: mathfernandes@usp.br
 */

'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    username: {
        type: String, 
        required: [true, 'O usuername é obrigatório'],
        index: true,
        trim: true
    },
    email: {
        type: String, 
        required: [true, 'O email é obrigatório'],
        index: true,
        trim: true
    },
    password: {
        type: String, 
        required: [true, 'A senha é obrigatória']
    }, 
    token: {
        type: String,
        index: true,
    },
    role: {
        type: String,
        required: [true, 'Especifique o tipo de usuário']
    }, 
    tel: {
        type: String, 
    },
    born: {
        type: String,
        required: [true, 'Data de nascimento é obrigatório']
    },
    filepath: {
        type:String,
        Required: [true, 'A imagem é obrigatória']
    },
    petsId: [{
        type: String,
    }],
    carId: {
        type: String,
        required: [true, 'O usuário não tem carrinho']
    }
});

module.exports = mongoose.model('User', user);