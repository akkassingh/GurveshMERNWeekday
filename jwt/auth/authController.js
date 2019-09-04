var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var bycrypt = require('bcryptjs');
var config = require('../config');

router.use(bodyParser.urlencoded({
    extended: false
}));
router.use(bodyParser.json());
var User = require('../user/user')

router.post('/register', (req, res) => {
    var hashedPassword = bycrypt.hashSync(req.body.password, 8);
    User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            role: req.body.role ? req.body.role : 'user'
        },
        function (err, user) {
            if (err) return res.status(500).send('Cannot register');
            var token = jwt.sign({
                id: user._id
            }, config.secret, {
                expiresIn: 86400
            })
            res.status(200).send({
                auth: true,
                token: token
            })
        }
    )
})


router.post('/login', (req, res) => {
    User.findOne({
        email: req.body.email
    }, (err, user) => {
        if (err) return res.status(500).send('caught Error');
        if (!user) return res.status(404).send('No user found');
        let passwordIsValid = bycrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) return res.status(401).send({
            auth: false,
            token: null
        });
        var token = jwt.sign({
            id: user._id
        }, config.secret, {
            expiresIn: 86400
        })
        res.status(200).send({
            auth: true,
            token: token
        })
    })
})

router.post('/userinfo', (req, res) => {
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({
        auth: false,
        message: 'no token found'
    });
    jwt.verify(token, config.secret, (err, decode) => {
        if (err) return res.status(500).send({
            auth: false,
            message: 'failed'
        });
        User.findById(decode.id, {
            password: 0
        }, (err, user) => {
            if (err) return res.status(500).send('No user found');
            res.status(200).send(user)
        })
    })
})


module.exports = router;