const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routsUrl = require('./routes')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()
mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database connected"))

app.use(express.json())
app.use(cors())
app.use('/app', routsUrl)

const server = app.listen(5000, function () {
    console.log('Server is running..')
})