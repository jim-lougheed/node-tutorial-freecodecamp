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

app.get('/api/products/:productID/reviews/reviewID', (req, res) => {
    console.log(req.params);
    res.send('Hello World')
})

app.get('/api/v1/query', (req, res) => {
    console.log(req.query);
    const { search, limit } = req.query;
    let sortedProducts = [...products]

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1) {
        // return res.status(200).send('No product matches')
        return res.status(200).json({ success: true })
    }
    res.status(200).json(sortedProducts);
    // res.send('Hello World')
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})