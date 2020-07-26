'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pet = new Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, 'O pet deve ter um dono']
    },
    name: {
        type: String,
        required: [true, 'O pet deve ter um nome'],
    },
    race: {
        type: String,
        required: [true, 'O pet deve ter uma raça'],
    },
    age: {
        type: Number,
        required: [true, 'Informa a idade do pet'],
    },
    description: {
        type: String,
    }
}, { timestamps: true });

module.exports = mongoose.model('Pet', pet);