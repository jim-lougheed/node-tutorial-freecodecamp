const express = require('express');
const app = express();
const PORT = 3000;

const people = require('./routes/people');
const login = require('./routes/auth');

// static assets
app.use(express.static('./methods-public'))

// parse form data
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use('/api/people', people);

app.use('/login', login);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})