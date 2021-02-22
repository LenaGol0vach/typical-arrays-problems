exports.min = function min(...array) {
    return Math.min(...array);
};

exports.max = function max(...array) {
    return Math.max(...array);
};

exports.avg = function avg(...array) {
    let sum = 0;
    for (let item of array) {
        sum += item;
    }
    return sum / array.length;
};
