const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [
        {
            type: { type: String, trim: true, required: 'Type of workout is required' },
            name: { type: String, trim: true, required: 'Type of workout name is required' },
            duration: { type: Number },
            weight: { type: Number },
            reps: { type: Number },
            sets: { type: Number },
            distance: { type: Number }
        }
    ]
},
{
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
}
);
WorkoutSchema.virtual('totalDuration') //new field
.get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});


const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = { Workout: Workout };