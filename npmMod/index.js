//var chalk = require('chalk');
var validator = require('validator');


//console.log(chalk.green.underline.inverse("Hello World!"));

const res = validator.isEmail('tanveer@tanveer.com');
console.log(res);
