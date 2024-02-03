const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const {mongoUrl} = require('./keys');


require('./models/user');

const requireToken = require('./middleware/requireToken');
const authRoutes = require('./routes/authRoutes');
app.use(bodyParser.json());
app.use(authRoutes);

const PORT = 3000;

mongoose.connect(mongoUrl);

mongoose.connection.on('connected', () => {
    console.log('Connected to mongoDB');
});

mongoose.connection.on('error', (err) => {
    console.log('Error connecting to mongoDB', err);
});

app.use('/auth', authRoutes);   

app.get('/', requireToken, (req, res) => {
    res.send(`Your email: ${req.user.email}`);
    });

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
    });