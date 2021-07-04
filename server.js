const express = require("express")
const morgan = require("morgan")
const mongoose = require("mongoose")
const workoutRoutes = require("./routes/workoutRoutes")
const path = require("path")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(morgan("dev"))

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/workout_db"
const PORT = process.env.PORT || 5000

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, findOneAndUpdate: false, findOneAndDelete: false })
.then(() => console.log("db connected"))
.catch(err => console.log(err))

app.use(workoutRoutes)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
})
app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/stats.html"))
})
app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/exercise.html"))
})


app.listen(PORT, () => console.log("app running on " + PORT))