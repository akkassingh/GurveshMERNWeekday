import express from 'express';
import mongo from 'mongodb';
import bodyParser from 'body-parser';
const mongoClient = mongo.MongoClient;

const app = express();
const port = 7600;
let db;
let mongoUrl = 'mongodb://127.0.0.1:27017'
const col_name = 'users';

app.use(express.static(__dirname + '/public'))
app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('api is running go to /user')
})

app.get('/user', (req, res) => {
    db.collection(col_name).find().toArray((err, result) => {
        if (err) throw err;
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Request-With, Content-Type, Accept')
        res.status(200).send(result)
    })
})

app.post('/addUser', (req, res) => {
    // if (req.body.name !== 'gurvesh') {
    //     res.status(401).send('Not valid')
    // } else {
    db.collection(col_name)
        .insertOne(req.body, (err, result) => {
            if (err) {
                res.status(401)
            } else {
                res.status(201).send('user Created')
            }
        })
    // }
})

app.put('/updateUser', (req, res) => {
    db.collection(col_name)
        .findOneAndUpdate({
            "name": req.body.name
        }, {
            $set: {
                "name": req.body.name,
                "city": req.body.city,
                "phone": req.body.phone,
                "class": req.body.class
            }
        }, {
            upsert: true
        }, (err, result) => {
            if (err) throw err
            res.send(result)
        })
})

app.delete('/deleteUser', (req, res) => {
    db.collection(col_name)
        .findOneAndDelete({
            "name": req.body.name
        }, (err, result) => {
            if (err) res.status(500).send(err)
            res.send({
                "message": "user Deleted"
            })
        })
})

app.post('/find_by_name', (req, res) => {
    let name = req.body.name;
    db.collection(col_name)
        .find({
            name
        })
        .toArray((err, result) => {
            if (err) throw err
            res.send(result)
        })
})

mongoClient.connect(mongoUrl, (err, client) => {
    if (err) throw err;
    db = client.db('clasesdb');
    app.listen(port, (err) => {
        console.log('Server listening on port ' + port)
    })
})