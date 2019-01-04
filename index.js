const http = require('http');
const server = http.createServer();
const port = 3000;

server.on('request', (req,res) => {
    let body = [];
    req.on('data', chunk => {
        body.push(chunk);
    });
    req
    .on('end', () => {
        body = body.concat.toString();
    })
    .on('error', () => {
        res.statusCode = 400;
        res.end();
    });
    res.on('error', err => {
        console.err(err);
    });
    res.write( "Hello World!");
    res.end();
}).listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});