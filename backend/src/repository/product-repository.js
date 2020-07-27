'use strict'

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = async() => {
    const res = await Product.find({}); 
    return res;
}

exports.getById = async(id) => {
    const res = await Product
        .findById(id); 
    return res;
}

exports.getBySlug = async(slug) => {
    const res = await Product
        .findOne({
            slug: slug,
        },'id title description price type');
    return res;
}

exports.getByType = async(type) => {
    const res = await Product
        .find({
            type: type,
        }, 'id title description price type');
    return res;
} 

exports.create = async(data) => {
    const prod = new Product(data);
    await prod.save();
}

exports.update = async(id, data) => {
    const res = await Product.findByIdAndUpdate(id, {
        $set: {
            title: data.title,
            slug: data.slug,
            description: data.description,
            price: data.price,
            filepath: data.filepath,
            quantityStore: data.quantityStore,
            quantitySold: data.quantitySold,
            type: data.type
        }
    });
    return res;
}

exports.delete = async(id) => {
    await Product.findOneAndRemove(id);
}

exports.updateStore = async(id, quantitySold) => {
    
    return res;
} 
