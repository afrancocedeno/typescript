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

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', require('./routes/users'))

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
