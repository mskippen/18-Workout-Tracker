const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  day: {
    type: Date,
    default: new Date(),
  },
  exercises: [
    {
      type: {
          type: String
      },
      name: String,
      duration: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
}, {
    toJSON: {
        virtuals: true
    }
});

workoutSchema.virtual('fullName').get(function() {
    return this.exercises[0].weight + this.exercises[0].reps;
  });
workoutSchema.virtual('totalDuration').get(function() {
    return this.exercises.reduce((acc, curr) => {
        return acc + curr.duration;
      }, 0)
  });

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
