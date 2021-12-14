const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Home')
    } else if (req.url === '/about') {
    // BLOCKING CODE !!!
        for (let i = 0; i < 300; i++) {
            for (let j = 0; j < 300; j++) {
                console.log(i, j);
            }
        }
        res.end('About')
    } else {
        res.end('Error')
    }
})

server.listen(3000, () => {
    console.log('Server listening on port 3000')
})