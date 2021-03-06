'use strict';

// this scrutre is from https://www.youtube.com/watch?v=PknC5SCkwjo&list=PLHlHvK2lnJndvvycjBqQAbgEDqXxKLoqn&index=24&t=485s
let errors = [];

function ValidationContract() {
    errors = [];
}

ValidationContract.prototype.isNumber = (value, message) => {
    if (typeof value !== 'number')
        errors.push({ message: message });
}

ValidationContract.prototype.isRequired = (value, message) => {
    if (!value || value.length <= 0)
        errors.push({ message: message });
}

ValidationContract.prototype.hasMinLen = (value, min, message) => {
    if (!value || value.length < min)
        errors.push({ message: message });
}

ValidationContract.prototype.hasMaxLen = (value, max, message) => {
    if (!value || value.length > max)
        errors.push({ message: message });
}

ValidationContract.prototype.hasMinValue = (value, min, message) => {
    if (typeof value !== 'number' || value < min)
        errors.push({ message: message });
}

ValidationContract.prototype.hasMaxValue = (value, max, message) => {
    if (typeof value !== 'number' || value > max)
        errors.push({ message: message });
}

ValidationContract.prototype.isFixedLen = (value, len, message) => {
    if (value.length != len)
        errors.push({ message: message });
}

ValidationContract.prototype.isLowerCase = (value , message) => {
    if (value.toLowerCase() != value)
        errors.push({ message: message });
}

ValidationContract.prototype.hasSpace = (value , message) => {
    if (value === undefined || value.includes(" "))
        errors.push({ message: message });
}

ValidationContract.prototype.isEqual = (value , confirm, message) => {
    if (value === !confirm)
        errors.push({ message: message });
}

ValidationContract.prototype.isEmail = (value, message) => {
    var reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
    if (value === undefined || !reg.test(value))
        errors.push({ message: message });
}

ValidationContract.prototype.isDate = (value, message) => {
    var reg = new RegExp(/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/);
    if (!reg.test(value))
        errors.push({ message: message });
}

ValidationContract.prototype.errors = () => { 
    return errors; 
}

ValidationContract.prototype.firstError = () => { 
    if(errors.length)
        return errors[0]; 
    return '';
}

ValidationContract.prototype.clear = () => {
    errors = [];
}

ValidationContract.prototype.isValid = () => {
    return errors.length == 0;
}

module.exports = ValidationContract;