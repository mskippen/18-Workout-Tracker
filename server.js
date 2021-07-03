const express = require("express")
const morgan = require("morgan")
const mongoose = require("mongoose")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(morgan("dev"))

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/workout_db"
const PORT = process.env.PORT || 5000

mongoose.connect(MONGO_URI, {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true})

app.listen(PORT, () => console.log("app running on " + PORT))