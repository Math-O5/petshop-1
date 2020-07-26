'use strict'

const mongoose = require('mongoose');
const Pet = mongoose.model('Pet');
const User = mongoose.model('User');

exports.get = async() => {
    const res = await Pet.find({}); 
    return res;
}

exports.getByPetId = async(petId) => {
    const res = await Pet.findById(petId); 
    return res;
}

exports.create = async(data) => {
    let pet = new Pet(data);
    return await pet.save();
}

exports.add = async(user, pet) => {
    try {
        pet.owner = user._id;
        const newPet = await new Pet(pet);
        await user.petsId.push(newPet._id);
        await newPet.save();
        await user.save();
    } catch(e) {
        return e;
    }
}

exports.remove = async(petId) => {
    const pet = await Pet.findById(petId);
    pet.remove();
}

exports.update = async(id, data) => {
    const res = await Pet.findByIdAndUpdate(id, {
        $set: {
            name: data.name,
            race: data.race,
            age: data.age,
            description: data.description,
        }
    });
    return res;
}
