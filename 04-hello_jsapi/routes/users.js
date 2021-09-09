const express = require('express');
const router = express.Router();

// create an array of users -> 'database'
const users = [
    {
        name: 'Tony',
        email: 'tony@email.com'
    }
]

router.get('/', (req, res) => {
    res.send('My Node.js server is live! using express')
});

// send back the full list of users
router.get('/users', (req, res) => {
    res.json({ ok: true, users });
});

// get a user by given name
router.get('/user/:name', (req, res) => {
    const { name } = req.params;
    const user = users.filter((user) => user.name === name)[0];
    res.json({ ok: true, user });
});

// add user post request with callback function
router.post('/adduser', (req, res) => {
    // build the user with the same params
    const { name, email } = req.body;

    // check if params are ok
    if (name && email) {
        users.push({ name, email });

        // send back to the new list of users
        res.json({ ok: true, users})
    }
});

module.exports = router;
