var express = require('express');
var router = express.Router();
const db = require('../config/database.js')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Home' });
});

router.get('/login', function(req, res, next) {
    res.render('index', { title: 'Login' });
});

router.get('/register', function(req, res) {
    res.render('register', { title: 'Register Account' })
})

router.post('/register', (req, res) => {
    console.log(req.query);
})

module.exports = router;