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
    try {
        const results = await db.Workout.create(body);
        res.json(results);
    }
    catch (error) {
        res.status(400).json(error)
    }
});

// PUT route
router.put('/:id', async ({ params, body }, res) => {
    try {
        let savedExercises = [];
        const prevWorkout = await db.Workout.findById(params.id);
        savedExercises = prevWorkout.exercises;
        totalExercises = [...savedExercises, body];
        res.json(totalExercises);
    }
    catch (error) {
        res.status(400).json(error)
    }
});

// get route for workouts range
router.get('/range', async (req, res) => {
    try {
        const result = await db.Workout.find({}).sort({ day: -1 }).limit(7);
        res.json(result);
    }
    catch (error) {
        res.status(400).json(error)
    }
});


module.exports = router