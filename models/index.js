const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date
    },
    exercises: [
        {
            type: { type: String },
            name: { type: String },
            duration: { type: Number },
            weight: { type: Number },
            reps: { type: Number },
            sets: { type: Number }
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