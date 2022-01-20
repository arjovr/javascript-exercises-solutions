const add = function(x, y) {
    return x + y;
};

const subtract = function(x, y) {
    return x - y;
};

const sum = function(xs) {
    return xs.reduce((total, x) => {
        return total + x;
    }, 0);

};

const multiply = function(xs) {
    return xs.reduce((total, x) => {
        return total * x;
    }, 1);
};

const power = function(x, y) {
    return x ** y;
};

const factorial = function(x) {
    let ret = 1;
    while (x > 0) {
        ret *= x;
        x--;
    }
    return ret;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};