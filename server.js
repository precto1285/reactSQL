const express = require('express');
const cors = require('cors');

const app = express();

const SELECT_ALL_PRODUCTS_QUERY = 'SELECT * FROM products';

const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
passwordL 'theo',
database: 'react_sql'
});

connection.connect(err => {
    if(err) {
        return err;
    }
});

app.use(cors());

app.get('/', (req, res)=> {
    res.send('go to/products to see products');
}); 

app.listen(3000, () => {
    console.log('Listening to server on port 3000');
})