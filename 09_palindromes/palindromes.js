const palindromes = function(x) {
    x = x.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g, '').toLowerCase();
    const a = x.split('');
    const b = [...a];
    b.reverse();
    return JSON.stringify(a) == JSON.stringify(b);
};

// Do not edit below this line
module.exports = palindromes;