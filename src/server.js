const http = require('http');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

// Creates the fuction that will be invoked when a request is made to the server.
const onRequest = (request, response) => {

};

http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1: ${port}`);
