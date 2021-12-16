const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

// set up static and middleware
app.use(express.static('./public'));

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })

app.all('*'), (req, res) => {
    res.status(404).send('Page not found')
}

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})