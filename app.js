const express = require('express');

const app = express();

const port = process.env.port || 8000;

app.get('/', function (req, res) {
    res.status(200).send('Hi from the Express')
})

app.get('/home', function (req, res) {
    //Show the home page
    res.status(200).send('Welcome to home')
})

app.get('/random', (err, res) => {
    if (err) throw err
    res.status(200).send(Math.random())
});

app.listen(port, function (err, res) {
    if (err) throw err;
    console.log('Server is running on port ', port);
})