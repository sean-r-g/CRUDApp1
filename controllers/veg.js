const express = require('express')
const router = express.Router()
// const VegList = require('../models/veggiedb.js')
const Veg = require('../models/veg.js')
const isAuthenticated = (req, res, next) => {
  if (req.session.currentUser) {
    return next()
  } else {
    res.redirect('/recipes/sessions/new')
  }
}

//SEED 
// router.get('/seed', (req, res)=>{
//   Veg.create(VegList, (err, allVeg)=>{
//     res.redirect('/recipes/vegetarian')
//   })
// })

//INDEX
router.get('/', (req, res)=>{
  Veg.find({}, (err, allVeg)=>{
    res.render('veg/index.ejs', {recipe: allVeg, currentUser: req.session.currentUser})
  })
})

//NEW
router.get('/new', isAuthenticated, (req, res)=>{
    res.render('veg/new.ejs', {currentUser: req.session.currentUser})
})


//SHOW
router.get('/:id', (req, res)=>{
  Veg.findById(req.params.id, (err, currentveg)=>{
    res.render('veg/show.ejs', {recipe: currentveg, currentUser: req.session.currentUser})
  })
})

//EDIT
router.get('/:id/edit', isAuthenticated, (req, res)=>{
  Veg.findById(req.params.id, (err, currentveg)=>{
    res.render('veg/edit.ejs', {recipe: currentveg, currentUser: req.session.currentUser})
  })
})

//CREATE 
router.post('/', (req, res)=>{
  Veg.create(req.body)
  res.redirect('/recipes/vegetarian')
  // res.send(req.body)
})

//UPDATE
router.put('/:id', (req, res)=>{
  Veg.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedItem)=>{
    res.redirect('/recipes/vegetarian')
  })
})

//DELETE
router.delete('/:id', (req, res)=>{
  Veg.findByIdAndDelete(req.params.id, (err, data)=>{
    res.redirect('/recipes/vegetarian')
  })
})


module.exports = router