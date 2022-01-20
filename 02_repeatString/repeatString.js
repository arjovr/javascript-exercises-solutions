const repeatString = function(str, n) {
    if (n < 0) {
        return 'ERROR';
    }
    let ret = '';
    while (n > 0) {
        ret += str;
        n--;
    }
    return ret;
};

// Do not edit below this line
module.exports = repeatString;