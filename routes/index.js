var express = require('express');
var router = express.Router();
const db = require('../config/database')
const md5 = require('md5')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Home' });
});

router.get('/login', function(req, res, next) {
    res.render('index', { title: 'Login' });
});

router.post('/login', function(req, res, next) {

    if (typeof req.session.logged != undefined) {
        req.redirect('home')
    }

    let params = req.body

    let username = params.username
    let password = params.password

    let sqlSelectAccount = `SELECT * FROM accounts WHERE username = '${username}' and password = '${md5(password)}'`

    let response = res

    db.query(sqlSelectAccount, (err, res) => {
        if (res.length > 0) {
            //is registered
            req.session.logged = true
            response.redirect('home')
        } else {
            //is not registered
            req.session.destroy()
            response.render('index', { title: "error" })
        }

    })
});

router.get('/register', function(req, res) {
    res.render('register', { title: 'Register Account' })
})

router.post('/register', (req, res) => {
    let params = req.body
    let sqlInsert = `INSERT INTO accounts (username, password, role) values('${params.username}','${md5(params.password)}','1')`

    db.query(sqlInsert, () => {
        res.redirect('/login')
    })

})

module.exports = router;