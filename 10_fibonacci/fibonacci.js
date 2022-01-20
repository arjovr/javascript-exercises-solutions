const fibonacci = function(x) {
    if (x == 1) {
        return 1;
    }
    if (x == 0) {
        return 0;
    }
    if (x < 0) {
        return 'OOPS';
    }
    return fibonacci(x-1) + fibonacci(x-2);
};

// Do not edit below this line
module.exports = fibonacci;
