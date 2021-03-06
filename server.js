
// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const mongoose = require('mongoose');
// =======================================
//              CONFIGURATIONS
// =======================================
const app = express();
require('dotenv').config()
const PORT = process.env.PORT


// =======================================
//              MIDDLEWARE
// =======================================
app.use(express.json())
app.use(express.static('public'))

// =======================================
//      ROUTE TO CONTROLLER
// =======================================
//REPLACE 'basiccrud' WITH YOUR DATABASE
const blogsController = require('./controllers/blogs.js')
app.use('/blogs', blogsController)
// =======================================
//              DATABASE
// =======================================
const MONGODB_URI = process.env.MONGODB_URI
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
// =======================================
//              ERROR/SUCCESS
// =======================================
mongoose.connection.on('error', err =>
    console.log(
        err.message,
        ' is Mongod not running?/Problem with Atlas Connection?'
    )
)

mongoose.connection.on('connected', () =>
    console.log('mongo connected: ', MONGODB_URI)
)

mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))

// =======================================
//              LISTENER
// =======================================
app.listen(PORT, () => {
    console.log('listening on port: ' + PORT)
});

