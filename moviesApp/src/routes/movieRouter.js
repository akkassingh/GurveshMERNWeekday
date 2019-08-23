const express = require('express');
const movieRouter = express.Router();
const mongodb = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";
const db_name = 'clasesdb';


function router(menu) {

    movieRouter.route('/')
        .get((req, res) => {
            mongodb.connect(url, (err, db) => {
                if (err) throw err
                const dbo = db.db(db_name);
                dbo.collection('movies').find({}).toArray(
                    (err, data) => {
                        if (err) throw err
                        res.render('movies', {
                            title: 'Movie Details',
                            menu: menu,
                            movies: data
                        })
                    }
                )
            })
        })

    movieRouter.route('/details/:id')
        .get((req, res) => {
            const {
                id
            } = req.params;
            mongodb.connect(url, (err, db) => {
                if (err) throw err
                const dbo = db.db(db_name);
                dbo.collection('movies').findOne({
                    _id: id
                },(err, data) => {
                        console.log('Data Received is ', data)
                        if (err) throw err
                        res.render('movieDetails', {
                            title: 'Movie Details',
                            menu: menu,
                            movieDetails: data
                        })
                    }
                )
            })
        })

    return movieRouter
}
module.exports = router;