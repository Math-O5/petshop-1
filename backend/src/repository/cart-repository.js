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
        let index = cart.productId.indexOf(item.productId);
  
        if(index > -1 && item.quantity <= "0") {
            cart.productId.splice(index, 1);
            cart.title.splice(index, 1);
            cart.quantity.splice(index, 1);
            cart.price.splice(index, 1);
        } else if (index > -1) {
            cart.quantity.set(index, item.quantity);
            cart.title.set(index, item.title);
            cart.price.set(index, item.price);
        } else {
            // the product is not in the cart
            cart.productId.push(item.productId);
            cart.quantity.push(item.quantity);
            cart.title.push(item.title);
            cart.price.push(item.price);
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
            cart.products.productId.splice(index, 1);
            cart.products.title.splice(index, 1);
            cart.products.quantity.splice(index, 1);
            cart.products.price.splice(index, 1);
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

exports.evaluete = async() => {

}