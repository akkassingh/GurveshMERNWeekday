var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    //Open a file on the server and return its content:
    fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
    fs.open('mynewfile2.txt', 'w', function (err, file) {
        if (err) throw err;
        console.log('Saved!');
      });
    fs.writeFile('mynewfile2.txt', 'w', function (err, file) {
        if (err) throw err;
        console.log('Saved!');
    });  
      res.end('Done')
}).listen(8080);