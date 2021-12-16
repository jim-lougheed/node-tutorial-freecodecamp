const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    console.log('user hit the home route')
    res.status(200).send('Home Page')
})

app.get('about', (req, res) => {
    res.status(200).send('About Page')
})

app.all('*', (req, res) => {
    res.status(404).send('Page Not Found')
})

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT)
})
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen