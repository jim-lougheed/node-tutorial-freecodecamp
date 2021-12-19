const express = require('express');
const app = express();
const PORT = 3000;

const { products, people } = require('./data');

// static assets
app.use(express.static('./methods-public'))

// parse form data
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people })
})

app.post('/api/people', (req, res) => {
    const { name } = req.body;
    if (!name) {
        res.status(400).json({ success:false, msg: 'Please provide a name'})
    }
    res.status(201).send({ success: true, person: name })
})

app.post('/api/postman/people', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: 'Please provide a name'})
    }
    res.status(201).send({ success: true, data: [...people, name] })
})

app.post('/login', (req, res) => {
    const { name } = req.body;
    if (name) {
        return res.status(200).send(`Welcome, ${name}`)
    } else {
        res.status(401).send('Please enter your name')
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})