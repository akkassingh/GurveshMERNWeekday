const express = require('express');

const app = express();

const port = process.env.port || 8000;


//serve the static files
app.use(express.static(__dirname + '/public'));

//view Engine to be used
app.set('view engine', 'ejs')

//path for views
app.set('views', './src/views');

app.get('/', function (req, res) {
    res.status(200).send('Hi from the Express')
})

app.get('/home', function (req, res) {
    res.render('home')
})

app.get('/welcome', function (req, res) {
    res.render('welcome',{
        name: 'gurvesh',
        age: 12,
        location: "Delhi"
    })
})

app.listen(port, function (err, res) {
    if (err) throw err;
    console.log('Server is running on port ', port);
})