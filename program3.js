var inputs = process.argv.slice(2);
/*map all incoming strings to their first character 
reduce the result by concatenating them together*/
var result = inputs.map((inputs) =>inputs[0]).join('');
// printing using tamplate strings      
console.log(`[${inputs}] becomes \"${result}"`);
