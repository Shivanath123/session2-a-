/**  userArray has [1,'jeo','jeo@gmail.com',23,'jeo','martin']*/
let userArray = process.argv.slice(2);
// declare empty object
let data = {};
// by destructuring assign values to username and email.
[ ,data.username, data.email] = userArray;
console.log(data);