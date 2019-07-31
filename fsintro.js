var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
    fs.open('mynewfile2.txt', 'w', function (err, file) {
        if (err) throw err;
        console.log('fs opened!');
      });
      fs.writeFile('mynewfile1.txt', 'data Changed!', function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
      fs.unlink('mynewfile2.txt', function (err) {
        if (err) throw err;
        console.log('File deleted!');
      });    
}).listen(8080);


//Callback function is also called error first callback
//Js we dont have the functionality to handle errors
//Error handling is not there in JS

//3 type of streams are available
