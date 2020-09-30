const express = require('express')
const Blog = require('../models/blogs.js')
const router = express.Router()


//=================================================
// ROUTES
//=================================================

//=================================================
// DELETE
//=================================================

router.delete('/:id', (req, res) => {
    Blog.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) {
            console.error(err);
        } else {
            res.redirect('/blogs')
        }
    })
})

//=================================================
// EDIT
//=================================================

router.get('/:id/edit', (req, res) => {
    Blog.findById(req.params.id, (error, foundBlog) => {
        res.render('/', {
            blog: foundBlog
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
            (err, updateModel) => {
                res.redirect('/')
            })
        // res.send(req.body)
})

//=================================================
// NEW
//=================================================

router.get('/new', (req, res) => {
    res.render('/')
})

//=================================================
// CREATE
//=================================================

router.post('/', (req, res) => {
    Blog.create(req.body, (error, createBlog) => {
        res.redirect('/')
    })
})


//=================================================
// UPDATE
//=================================================

router.put('/:id', (req, res) => {
    routuer.findByIdAndUpdate(
        req.params.id,
        req.body, { new: true },
        (error, updatedModel) => {
            res.redirect('/')
        }
    )
})


//=================================================
// SEED
//=================================================

router.get('/seed', (req, res) => {
    Blog.create(
        
        (err, data) => {
            res.send(data);
        }
    )
});

//=================================================
// SHOW
//=================================================

router.get('/:id', (req, res) => {
    Blog.findById(req.params.id, (error, foundBlog) => {
        res.render(
            '/', {
                blog: foundBlog
            }
        );
    })
});

//=================================================
// INDEX
//=================================================
router.get('/', (req, res) => {
    Blog.find({}, (error, allBlogs) => {
        res.render(
            '/', {
                
                blog: allBlogs,
                
            }
        );
    })
});


//=================================================
// EXPORT
//=================================================

module.exports = router;