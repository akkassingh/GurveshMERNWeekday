const express = require('express');
const fs = require('fs');

const app = express();

const port = process.env.port || 8000;

const productRouter = express.Router();
const movieRouter = express.Router();

//serve the static files
app.use(express.static(__dirname + '/public'));

//view Engine to be used
app.set('view engine', 'ejs')

//path for views
app.set('views', './src/views');

//initialize data
let final_menu = [{
        name: 'Home',
        link: '/home'
    },
    {
        name: 'Prodcuct',
        link: '/product'
    },
    {
        name: 'About us',
        link: '/about'
    }
]

let movies = [{
    "_id": "5ab12612f36d2879268f284a",
    "name": "Black Panther",
    "language": "ENGLISH",
    "rate": 4.5,
    "type": "Action Adventure Fantasy",
    "imageUrl": "https://image.ibb.co/f0hhZc/bp.jpg"
}, {
    "_id": "5ab12666f36d2879268f2902",
    "name": "Death Wish",
    "language": "ENGLISH",
    "type": "Action Crime Thriller",
    "rate": 3.2,
    "imageUrl": "https://image.ibb.co/gC9PfH/dw.jpg"
}, {
    "_id": "5ab12678f36d2879268f291d",
    "name": "Coco",
    "language": "ENGLISH",
    "type": "Adventure Animation Family",
    "rate": 5,
    "imageUrl": "https://image.ibb.co/dQwWSx/coco.jpg"
}, {
    "_id": "5ab126b6f36d2879268f2943",
    "name": "Avengers",
    "language": "ENGLISH",
    "type": "Actione",
    "rate": 2,
    "imageUrl": "https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/04/01/Pictures/_46a0b2c0-3590-11e8-8c5f-3c6cc031651e.jpg"
}, {
    "_id": "5ab4e66b0c1d2b27846c6407",
    "name": "Black Friday",
    "language": "ENGLISH",
    "rate": 4.5,
    "type": "Action Adventure Fantasy",
    "imageUrl": "https://image.ibb.co/f0hhZc/bp.jpg"
}, {
    "_id": "5ab12686f36d2879268f2930",
    "name": "Mission Impossible",
    "language": "English",
    "rate": 2.5,
    "type": "Horror Thriller",
    "imageUrl": "https://pre00.deviantart.net/5d3b/th/pre/f/2017/313/2/b/mission_impossible__dark_directive_teaser_poster_by_themadbutcher-dbt9wav.png"
}, {
    "_id": "5ab12698f36d2879268f293e",
    "name": "Incredibles 2",
    "language": "ENGLISH",
    "type": "Animated",
    "rate": 4,
    "imageUrl": "http://static1.squarespace.com/static/588a4776f5e23132a09d23b2/588a4e91be65945e50a36c0e/5b24084baa4a999c88a9f277/1529088827756/tre.jpg"
}]

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Home',
        menu: final_menu
    })
})

// app.get('/root', function (req, res) {
//     res.render('root', {
//         title: 'Page'
//     })
// })

productRouter.route('/')
    .get((req, res) => {
        res.render('product', {
            title: 'Product',
            menu: final_menu
        })
    })

productRouter.route('/details')
    .get((req, res) => {
        res.render('productDetails', {
            title: 'Product details',
            menu: final_menu
        })
    })

movieRouter.route('/')
    .get((req, res) => {
        res.render('movies', {
            title: 'Movie Details',
            menu: final_menu,
            movies
        })
    })

movieRouter.route('/details')
    .get((req, res) => {
        res.render('movieDetails', {
            title: 'Movie Details',
            menu: final_menu
        })
    })

app.use('/product', productRouter);
app.use('/movies', movieRouter);

// app.get('/product', function (req, res) {
//     res.render('product',{
//         title: 'Product',
//         menu: final_menu
//     })
// })

// app.get('/about', function (req, res) {
//     res.render('about', {
//         title: 'About Us',
//         menu: final_menu
//     })
// })

// app.get('/welcome', function (req, res) {
//     res.render('welcome', {
//         name: 'gurvesh',
//         age: 12,
//         location: "Delhi"
//     })
// });

app.get('/fs', function (req, res) {
    fs.readFile('root.html', function (err, result) {
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