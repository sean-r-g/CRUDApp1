const express = require('express')
const router = express.Router()
// const seafoodList = require('../models/seafooddb.js')
const Seafood = require('../models/seafood.js')
const isAuthenticated = (req, res, next) => {
  if (req.session.currentUser) {
    return next()
  } else {
    res.redirect('/recipes/sessions/new')
  }
}

// //SEED 
// router.get('/seed', (req, res)=>{
//   Seafood.create(seafoodList, (err, allSeafood)=>{
//     res.redirect('/')
//   })
// })

//INDEX
router.get('/', (req, res)=>{
  Seafood.find({}, (err, allSeafood)=>{
    res.render('seafood/index.ejs', {recipe: allSeafood, currentUser: req.session.currentUser})
  })
})

//NEW
router.get('/new', isAuthenticated, (req, res)=>{
    res.render('seafood/new.ejs', {currentUser: req.session.currentUser})
})


//SHOW
router.get('/:id', (req, res)=>{
  Seafood.findById(req.params.id, (err, currentseafood)=>{
    res.render('seafood/show.ejs', {recipe: currentseafood, currentUser: req.session.currentUser})
  })
})

//EDIT
router.get('/:id/edit', isAuthenticated, (req, res)=>{
  Seafood.findById(req.params.id, (err, currentseafood)=>{
    res.render('seafood/edit.ejs', {recipe: currentseafood, currentUser: req.session.currentUser})
  })
})

//CREATE 
router.post('/', (req, res)=>{
  Seafood.create(req.body)
  res.redirect('/recipes/seafood', {currentUser: req.session.currentUser})
  // res.send(req.body)
})

//UPDATE
router.put('/:id', (req, res)=>{
  Seafood.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedItem)=>{
    res.redirect('/recipes/seafood', {currentUser: req.session.currentUser})
  })
})

//DELETE
router.delete('/:id', (req, res)=>{
  Seafood.findByIdAndDelete(req.params.id, (err, data)=>{
    res.redirect('/recipes/seafood', {currentUser: req.session.currentUser})
  })
})


module.exports = router