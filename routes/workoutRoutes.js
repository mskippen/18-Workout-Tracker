const router = require("express").Router();
const Workout = require("../models/Workout");

router.get("/api/workouts", async (req, res) => {
  try {
    const data = await Workout.find({});
    res.json(data);
  } catch (err) {
    console.log(err);
  }
});

router.get("/api/workouts/range", async (req, res) => {
  try {
    const data = await Workout.find({});
    res.json(data);
  } catch (err) {
    console.log(err);
  }
});

router.get("/api/workouts/:id", async (req, res) => {
  try {
    const data = await Workout.findById({ _id: req.params.id });
    res.json(data);
  } catch (err) {
    console.log(err);
  }
});

router.post("/api/workouts", async (req, res) => {
  try {
    const data = await Workout.create(req.body);
    res.json(data);
  } catch (err) {
    console.log(err);
  }
});

router.put("/api/workouts/:id", async (req, res) => {
  try {
    const data = await Workout.updateOne(
      { _id: req.params.id },
      { $push: { exercises: { ...req.body } } },
      {new: true}
    );
    res.json(data);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
