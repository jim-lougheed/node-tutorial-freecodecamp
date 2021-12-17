const express = require('express');
const app = express();
const PORT = 3000;
const logger = require('./logger');

// req => middleware => res
app.use('/api', logger);

app.get('/', (req, res) => {
    res.send('Home');
})

app.get('/about', (req, res) => {
    res.send('About');
})

app.get('/api/products', (req, res) => {
    res.send('Products');
})

app.get('/api/items', (req, res) => {
    res.send('Items');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})