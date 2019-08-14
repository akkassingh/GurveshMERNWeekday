const express = require('express');
const app = express();
const port = process.env.port || 8000;
const request = require('request');
const axios = require('axios');

const weatherUrl = "http://api.openweathermap.org/data/2.5/forecast/daily?id=5308655&appid=fbf712a5a83d7305c3cda4ca8fe7ef29&cnt=5";

app.get('/', (req, res) => {
    res.send('Weather api is running...')
})

app.get('/weather', (req, res) => {
    request(weatherUrl, (err, response) => {
        if (err) {
            res.status(400).send('Data not found')
        } else {
            const data = JSON.parse(response.body);
            res.send({
                type: 'Api response',
                data
            })
        }
    })
})

app.get('/axios', (req, res) => {
    axios.get(weatherUrl)
        .then((response) => {
            const data = response.data;
            return res.status(200).send(data)
        })
        .catch((err) => {
            console.log('inside the catch block...', err)
            return res.status(400).send(err)
        })
})

app.listen(port, (err) => {
    console.log(`App is runnung on port ${port}`)
})