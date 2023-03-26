/**
 * This is a basic starting point of the assignment
 * Modify the code according to your own needs and requirements
 */
require('dotenv').config()
const express = require('express')
const cors =require('cors')
const dbStart = require('./dbHandler/dbconfig')

// const router = require('router')


const app = express()
dbStart()
const port = process.env.PORT ||8000
// Adding a Router

app.use(express.json())
app.use(cors())
app.use('/ghost', require('./routes/ghostRoute'));
app.use('/evidence', require('./routes/evidenceRoute'));
app.use('/game', require('./routes/gameroutes'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

