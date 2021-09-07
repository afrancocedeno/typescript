/**
 * create a server using http
 */
const http = require('http');

http.createServer((req, res) => {
    res.write('My Node.js server is live! using http');
    res.end();
}).listen(4040);
