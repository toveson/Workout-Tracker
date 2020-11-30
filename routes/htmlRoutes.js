const express = require('express');
const router = express.Router();
const path = require('path');

// exercise route
router.get('/exercise', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

// index route
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// stats route
router.get('/stats', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});

module.exports = router;