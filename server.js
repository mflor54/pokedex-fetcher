const http = require('http');
const scraper = require('./pokemonScraper');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer(async (req, res) => {
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS, GET",
        "Access-Control-Max-Age": 2592000, // 30 days
        "Content-type": "application/json"
    }

    const { method, url } = req;

    if(method == 'GET' && url !== '/favicon.ico') {
        const data = await scraper(url);

        res.writeHead(200, headers);
        res.write(JSON.stringify(data));
        res.end();
    }
    else {
        const message = { message : 'Please enter a Pokemon name' };

        res.writeHead(404, headers);
        res.write(JSON.stringify(message));
        res.end();
    }
});

server.listen(port, hostname, () => {
    console.log('Server running at localhost:8080')
});
