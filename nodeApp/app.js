const express = require('express');
const fs = require('fs');

const app = express();

const port = process.env.port || 8000;


//serve the static files
app.use(express.static(__dirname + '/public'));

//view Engine to be used
app.set('view engine', 'ejs')

//path for views
app.set('views', './src/views');

//initialize data
let final_menu = [
    {name:'Home', link: '/home'},
    {name:'Prodcuct', link: '/product'},
    {name:'About us', link: '/about'}
]
app.get('/',(req, res) => {
    res.status(200).send('Hi from the Express')
})

app.get('/root', function (req, res) {
    res.render('root',{
        title: 'Page'
    })
})

app.get('/home', function (req, res) {
    res.render('home',{
        title: 'Home',
        menu: final_menu
    })
})

app.get('/product', function (req, res) {
    res.render('product',{
        title: 'Product',
        menu: final_menu
    })
})

app.get('/about', function (req, res) {
    res.render('about',{
        title: 'About Us',
        menu: final_menu
    })
})

app.get('/welcome', function (req, res) {
    res.render('welcome',{
        name: 'gurvesh',
        age: 12,
        location: "Delhi"
    })
});

app.get('/fs', function (req, res) {
    fs.readFile('root.html',function(err, result){
        res.status(200).write(result)
    })
});


app.listen(port, function (err, res) {
    if (err) throw err;
    console.log('Server is running on port ', port);
})


// const add = function(a,b){
//     return a+b;
// }

// const add = (a,b) => {
//     return a+b;
// }