const path = require('path');

console.log(path.dirname('C:/Users/SAHIL COMPUTER/Desktop/Node Js by Thapa/pathModule/path.js'));
console.log(path.extname('C:/Users/SAHIL COMPUTER/Desktop/Node Js by Thapa/pathModule/path.js'));
console.log(path.basename('C:/Users/SAHIL COMPUTER/Desktop/Node Js by Thapa/pathModule/path.js'));
console.log(path.parse('C:/Users/SAHIL COMPUTER/Desktop/Node Js by Thapa/pathModule/path.js'));

const myPath = path.parse('C:/Users/SAHIL COMPUTER/Desktop/Node Js by Thapa/pathModule/path.js');
console.log(myPath.name);
console.log(myPath.root);