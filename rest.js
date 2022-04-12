/**
 * exporting function to make use in another file
 */
module.exports = function average(...args){
    var sum = 0;
    var avg;
    args.forEach(function (value) {
        sum += value;
    });
    avg = sum/args.length;
    return avg;
};
