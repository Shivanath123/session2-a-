/**
 * process.argv property returns an array containing the arguments passed to the process when run it in the command line.
 */
var numbers = process.argv.slice(2);
var min = Math.min(...numbers);
console.log(`The minimum of [${numbers}] is ${min}`);
