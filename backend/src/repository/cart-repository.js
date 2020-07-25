'use strict'

const mongoose = require('mongoose');
const Cart = mongoose.model('Cart');

exports.get = async() => {
    const res = await Cart.find({}); 
    return res;
}

exports.getByCartId = async(cartId) => {
    const res = await Cart.findById(cartId); 
    return res;
}

exports.create = async(data) => {
    let cart = new Cart(data);
    return await cart.save();
}

exports.add = async(cart, item) => {
    try {
        let index = cart.products.findIndex(prod => prod.productId == item.productId);
    
        // If the product already exist, just ensure that the values are update and change to the new quantity
        if (index > -1) {
            let productItem = cart.products[index];
            productItem.quantity = item.quantity;
            productItem.price = item.price,
            productItem.title = item.title, 
            cart.products[index] = productItem;
        } else {
            // the product is not in the cart
            cart.products.push(item);
        }
        return await cart.save();
    } catch(e) {
        return e;
    }
}

exports.removeProduct = async(cart, itemId) => {
    try {
        let index = cart.products.findIndex(prod => prod.productId == itemId);
    
        // Delete element from array
        if (index > -1) {
            cart.products.splice(index, 1);
        } 

        return await cart.save();
    } catch(e) {
        return e;
    }
}

exports.remove = async(cartId) => {
    const cart = await Cart.findById(cartId);
    cart.remove();
}