const mysql = require('mysql')
const config = {
    host: '34.238.126.91',
    port: '3306',
    user: 'uziel',
    database: 'products',
    password: 'perezlopez11'
}

const conn = mysql.createConnection(config)

conn.connect(function (err) {
    if (err) throw err;
    console.log('Database is connected successfully!!!!')
})

module.exports = conn;