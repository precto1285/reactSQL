const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const selectAll = 'SELECT * FROM products'

const SELECT_ALL_USERS_QUERY = 'SELECT * FROM user_Info';

const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'root',
database: 'reactsql'
});

connection.connect(err => {
    if(err) {
        return err;
    }
});

app.use(cors());

app.get('/', (req, res)=> {
    res.send('go to /products to see products')
    }); 

    app.get('/userInfo', (req, res) => {
        connection.query(SELECT_ALL_USERS_QUERY, (err, results) => {
            if(err) {
                return res.send(err)
            }
            else {
                return res.json({
                    data: results
                })
            }
    });

app.listen(3000, () => {
    console.log('Listening to server on port 3000');
})