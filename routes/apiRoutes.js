const express = require('express');
const router = express.Router();
const db = require('../models')

// GET workouts route
router.get('/', async (req, res) => {
    try {
        const results = await db.Workout.find({});
        res.json(results);
    }
    catch (error) {
        res.status(400).json(error)
    }
});

// POST workouts route
router.post('/', async ({ body }, res) => {
    try{
        const results = await db.Workout.create(body);
        res.json(results);
    }
    catch (error) {
        res.status(400).json(error)
    }
});


module.exports = router