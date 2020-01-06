var mysql = require('mysql')

//-----------Connection Mysql----------//
const connSQL = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node'
})

connSQL.connect(err => {
    if (err) throw err
    console.log("MySQL connected to db Node");
})

module.exports = connSQL