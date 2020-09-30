const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    date: Date,
    title: String,
    entry: String,
    url: String
})

const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog