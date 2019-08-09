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
let final_menu = [{
        name: 'Home',
        link: '/'
    },
    {
        name: 'Prodcuct',
        link: '/product'
    },
    {
        name: 'About us',
        link: '/'
    }
]

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Home',
        menu: final_menu
    })
})

const productRouter = require('./src/routes/productRouter')(final_menu);
const movieRouter = require('./src/routes/movieRouter')(final_menu);

app.use('/product', productRouter);
app.use('/movies', movieRouter);

app.get('/fs', function (req, res) {
    fs.readFile('root.html', function (err, result) {
        res.status(200).write(result)
    })
});


app.listen(port, function (err, res) {
    if (err) throw err;
    console.log('Server is running on port ', port);
})