const http = require('http');   // Call in the builtin http module into this file.
const server = http.createServer(); // Create a http server.
const port = 3000;  // Create a variable and store the port number.

server.on('request', (req,res) => { // On server request do this.
    let body = [];  // Create an empty array.
    req.on('data', chunk => {   // Upon receiving data do this.
        body.push(chunk);   // Save or push the data into the array.
    });
    req
    .on('end', () => {  // When there's no more data coming through do this.
        body = body.concat.toString();  // Concatenate all the content of the array and turn it into a string.
    })
    .on('error', () => {    // On request error do this.
        res.statusCode = 400;   // Send the status code 400.
        res.end();  // End the response.
    });
    res.on('error', err => {    // On response error do this.
        console.err(err);   // Log the error.
    });
    res.write( "Hello World!"); // On a successful request, send the response.
    res.end();  // End the response.
}).listen(port, () => { // Listen on port 3000.
    console.log(`Server listening on port: ${port}`);   // Once a connection has been established log this message.
});