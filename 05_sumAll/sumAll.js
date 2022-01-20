const euler = function(n) {
    return n * (n + 1) / 2;
}

const sumAll = function(start, end) {
    if (start < 0 || end < 0 || Number(start) !== start || Number(end) !== end) {
        return 'ERROR';
    }
    let min = Math.min(start, end);
    let max = Math.max(start, end);
    return euler(max) - euler(min) + min;
};

// Do not edit below this line
module.exports = sumAll;