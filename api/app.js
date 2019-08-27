const express = require('express');
const mongo = require('mongodb');
const mongoClient = mongo.MongoClient;
const bodyParser = require('body-parser');

const app = express();
const port = 7600;
let db;
let mongoUrl = 'mongodb://127.0.0.1:27017'
const col_name = 'users';

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())


app.get('/user', (req, res) => {
    db.collection(col_name).find().toArray((err, result) => {
        if (err) throw err;
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Request-With, Content-Type, Accept')
        res.status(200).send(result)
    })
})

app.post('/addUser', (req, res) => {
    if (req.body.name !== 'gurvesh') {
        res.status(401).send('Not valid')
    } else {
        db.collection(col_name)
            .insertOne(req.body, (err, result) => {
                if (err) {
                    res.status(401)
                } else {
                    res.status(201).send('user Created')
                }
            })
    }
})

mongoClient.connect(mongoUrl, (err, client) => {
    if (err) throw err;
    db = client.db('clasesdb');
    app.listen(port, (err) => {
        console.log('Server listening on port ' + port)
    })
})