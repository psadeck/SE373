/*
 * This is the most simple level of how to read a file in Node.js
 */


var fileSystem = require('fs');

fileSystem.readFile('input.txt' , function (err, data) {
    if (err) return console.error(err);
    console.log( data.toString() );
});

fileSystem.appendFile('stuff.json,{"fname:""pete}')

console.log('Program completed');
