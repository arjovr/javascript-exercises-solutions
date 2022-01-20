const ftoc = function(x) {
    return Math.round((5 * (x - 32) / 9) * 10) / 10;
};

const ctof = function(x) {
    return Math.round((9 * x / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
    ftoc,
    ctof
};