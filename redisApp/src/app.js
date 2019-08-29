import express from 'express';
import axios from 'axios';
import redis from 'redis';

const app = express();
const client = redis.createClient();

client.on('error', (err) => {
    console.log('error received while connecting redis ', err)
})

app.get('/fetch', (req, res) => {
    let userInput = req.query.search;
    var url = `https://en.wikipedia.org/w/api.php?action=parse&format=json&section=0&page=${userInput}`

    return client.get(`wiki:${userInput}`, (err, result) => {
        if (result) {
            let output = JSON.parse(result)
            return res.status(200).send(output)
        } else {
            return axios.get(url)
                .then(response => {
                    let output = response.data;
                    client.setex(`wiki:${userInput}`, 3600, JSON.stringify({
                        source: ' Redis Cache',
                        ...output
                    }));
                    return res.status(200).json({
                        source: 'Api call',
                        ...output
                    })
                })
                .catch(err => {
                    return res.send(err)
                })
        }
    })

})


app.listen(4500, () => {
    console.log('Server listening on port 4500')
})