const express = require('express');
const mongoose = require('mongoose');
const User = require('./user');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const dns = require('dns');
const net = require('net');

const app = express();
app.use(express.json());
app.use(cors())

mongoose.connect('mongodb://localhost:27017/loginDB');

app.post('/register', async (req, res) => {
    try {
        const { name, email, phone, username, password } = req.body;

        if (!name || !email || !phone || !username || !password) {
            return res.status(400).send('Forms cannot be empty!');
        }

        const phoneRegex = /^[0-9]+$/;
        if (!phoneRegex.test(phone)) {
            return res.status(400).send('Phone number must contain only numbers.');
        }

        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).send('E-mail address registered in the system.');
        }

        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).send('Username registered in the system.');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ name, email, phone, username, password: hashedPassword });
        await newUser.save();

        res.status(201).send('Register successfully.');

    } catch (error) {
        res.status(500).send('Register Error!');

    }
});

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).send('Forms cannot be empty!');
        }

        const user = await User.findOne({ username });

        if (!user) {
            return res.status(400).send('Username is not registered in the system.');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            res.status(200).send(`Welcome ${user.name}`);
        } else {
            res.status(400).send('Incorrect password!');
        }

    } catch (error) {
        res.status(500).send('Login error!');

    }
});

app.listen(3000, () => {
    console.log('Successful..');
});
