var mysql = require('mysql')

//-----------Connection Mysql----------//
const connSQL = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node'
})

module.exports = connSQL