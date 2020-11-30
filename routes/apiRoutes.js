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


// ***PUT route api/workouts/workout_id
router.put('/:id', async ({ params, body }, res) => {
    try {
        let savedExercises = [];
        const prevWorkout = await db.Workout.findById(params.id);
        savedExercises = prevWorkout.exercises;
        totalExercises = [...savedExercises, body];
        res.json(totalExercises);
        //Update db
        await db.Workout.findByIdAndUpdate(params.id, { exercises: totalExercises });
    } catch (error) {
        res.status(400).json(err);
    }
});

// ***GET route api/workouts/range
router.get('/range', async (req, res) => {
    try {
        const result = await db.Workout.find({}).sort({ day: -1 }).limit(7);
        res.json(result);
    } catch (error) {
        res.status(400).json(err);
    }
});

module.exports = router