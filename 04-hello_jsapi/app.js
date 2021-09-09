/**
 * create a server using express
 */

const express = require('express');

const app = express();
const port = process.env.PORT || 4041;

/*
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 */

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', require('./routes/users.js'));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
