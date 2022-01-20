const removeFromArray = function(xs, ...other) {
    for (let i = 0; i < xs.length; i++) {
        const x = xs[i];
        if (other.includes(x)) {
            xs.splice(i, 1);
            i--;
        }
    }
    return xs;
};

// Do not edit below this line
module.exports = removeFromArray;