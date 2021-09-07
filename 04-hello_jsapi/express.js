/**
 * create a server using express
 */

// import the express module
const express = require('express');

// initialize the app as a variable
const app = express();

// set environment variables port
const port = process.env.PORT || 4041;

// get route
app.get('/', (req, res) => {
    res.send('My Node.js server is live! using express')
});

// listen to the port setted 4041
app.listen(port, () => {
 console.log("Server running on port 4041");
});
