const reverseString = function(str) {
    let xs = str.split('');
    xs.reverse();
    return xs.join('');
};

// Do not edit below this line
module.exports = reverseString;