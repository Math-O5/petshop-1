'use strict'

const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.get = async() => {
    const res = await User.find({},'id username email address role tel born petsId carId'); 
    return res;
}

exports.getAdmins = async() => {
    const res = await User.find({role: 'Admin'},'id username email address role tel born petsId carId'); 
    return res;
}

exports.updateToken = async(id, token) => {
    const res = await User.findByIdAndUpdate(id, {
        $set: {
            token: token,
        }
    });
    return res;
}