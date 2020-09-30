const express = require('express')
const Blog = require('../models/blogs.js')
const blogs = express.Router()

// =======================================
//              ROUTES
// =======================================

/* ===========
GET ROUTE
============= */
//INDEX
blogs.get('/', (req, res) => {
    Blog.find({}, (err, foundBlogs) => {
        res.json(foundBlogs)
    })
})

/* ===========
POST ROUTE
============= */
//CREATE
blogs.post('/', (req, res) => {
    Blog.create(req.body, (err, createdBlog) => {
        Blog.find({}, (err, foundBlogs) => {
            res.json(foundBlogs)
        })
    })
})

//=================================================
// UPDATE
//=================================================

blogs.put('/:id', (req, res) => {
    //console.log(req.params.id);
    //console.log(req.body);
    Blog.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        { new: true },
            (err, updatedBlog) => {
                if(err) {
                    res.send(err)
                }else {
                    Blog.find({}, (err, foundBlogs) => {
                        res.json(foundBlogs)
                    })
                }
        })
    })          

//=================================================
// DELETE
//=================================================

blogs.delete('/:id', (req, res) => {
    Blog.findByIdAndRemove(req.params.id, (err, deletedBlog) => {
        Blog.find({}, (err, foundBlogs) => {
            res.json(foundBlogs)
        })
    })
})

module.exports = blogs