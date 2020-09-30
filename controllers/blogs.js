const express = require('express')
const Blog = require('../models/blogs.js')
const router = express.Router()

// =======================================
//              ROUTES
// =======================================

/* ===========
GET ROUTE
============= */
//INDEX
router.get('/', (req, res) => {
    Blog.find({}, (err, foundBlog) => {
        res.json(foundBlog)
    })
})

/* ===========
POST ROUTE
============= */
//CREATE
router.post('/', (req, res) => {
    Blog.create(req.body, (err, createdBlog) => {
        Blog.find({}, (err, foundBlog) => {
            res.json(foundBlog)
        })
    })
})

//=================================================
// PUT
//=================================================

router.put('/:id', (req, res) => {
    Blog.findByIdAndUpdate(req.params.id, req.body, {
                new: true
            },
            (err, updatedBlog) => {
                if(err) {
                    res.send(err)
                }else {
                    Blog.find({}, (err, foundBlog) => {
                        res.json(foundBlog)
                    })
                }
        })
    })          

//=================================================
// DELETE
//=================================================

router.delete('/:id', (req, res) => {
    Blog.findByIdAndRemove(req.params.id, (err, deletedBlog) => {
        Blog.find({}, (err, foundBlog) => {
            res.json(foundBlog)
        })
    })
})
module.exports = router;