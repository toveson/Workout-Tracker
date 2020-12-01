// required packages
const express = require('express');
const path = require('path');
let mongoose = require('mongoose');
const logger = require('morgan');
const db = require('./models');
require('dotenv/config');

//  setting up server
const PORT = process.env.PORT || 8080;
const app = express();

// middleware
app.use(logger('dev'));

// static directory
app.use(express.static('public'));

// routes
const htmlRoutes = require('./routes/htmlRoutes.js');
const apiRoutes = require('./routes/apiRoutes.js');

app.use('/', htmlRoutes);
app.use('/api/workouts', apiRoutes);



// mongoose connsection
mongoose.connect(
    process.env.MONGOD_URI || 'mongidb://localhost/workout', 
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

app.listen(PORT, () => console.log('Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT));