const express = require('express');
const app = express();
const PORT = 3000;
const { products } = require('./data.js');

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const {id, name, image} = product;
        return {id, name, image}
    })
    res.json(newProducts)
})

app.get('/api/products/:productID', (req, res) => {
    const singleProduct = products.find((product) => {
        return product.id === Number(req.params.productID)
    })
    if (!singleProduct) {
        res.status(404).send('Product not found')
    } else {
        res.status(200).json(singleProduct);
    }
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})