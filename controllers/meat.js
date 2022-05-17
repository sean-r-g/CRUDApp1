const express = require('express')
const router = express.Router()
// const meatList = require('../models/meatdb.js')
const Meat = require('../models/meat.js')
const isAuthenticated = (req, res, next) => {
  if (req.session.currentUser) {
    return next()
  } else {
    res.redirect('/recipes/sessions/new')
  }
}

// //SEED 
// router.get('/seed', (req, res)=>{
//   Meat.create(meatList, (err, allMeat)=>{
//     res.redirect('/')
//   })
// })

//INDEX
router.get('/', (req, res)=>{
  Meat.find({}, (err, allMeat)=>{
    res.render('meat/index.ejs', {recipe: allMeat, currentUser: req.session.currentUser})
  })
})

//NEW
router.get('/new', isAuthenticated, (req, res)=>{
    res.render('meat/new.ejs', {currentUser: req.session.currentUser})
})


//SHOW
router.get('/:id', (req, res)=>{
  Meat.findById(req.params.id, (err, currentmeat)=>{
    res.render('meat/show.ejs', {recipe: currentmeat, currentUser: req.session.currentUser})
  })
})

//EDIT
router.get('/:id/edit', isAuthenticated, (req, res)=>{
  Meat.findById(req.params.id, (err, currentmeat)=>{
    res.render('meat/edit.ejs', {recipe: currentmeat, currentUser: req.session.currentUser})
  })
})

//CREATE 
router.post('/', (req, res)=>{
  Meat.create(req.body)
  res.redirect('/recipes/meat')
  // res.send(req.body)
})

//UPDATE
router.put('/:id', (req, res)=>{
  Meat.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedItem)=>{
    res.redirect('/recipes/meat')
  })
})

//DELETE
router.delete('/:id', (req, res)=>{
  Meat.findByIdAndDelete(req.params.id, (err, data)=>{
    res.redirect('/recipes/meat', {currentUser: req.session.currentUser})
  })
})


module.exports = router

