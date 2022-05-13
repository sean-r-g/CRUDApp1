const express = require('express')
const router = express.Router()
const meatList = require('../models/meatdb.js')
const Meat = require('../models/meat.js')


//SEED 
router.get('/seed', (req, res)=>{
  Meat.create(meatList, (err, allMeat)=>{
    res.redirect('/')
  })
})

//INDEX
router.get('/', (req, res)=>{
  Meat.find({}, (err, allMeat)=>{
    res.render('meat/index.ejs', {recipe: allMeat})
  })
})

//NEW
router.get('/new', (req, res)=>{
    res.render('meat/new.ejs')
})


//SHOW
router.get('/:id', (req, res)=>{
  Meat.findById(req.params.id, (err, currentmeat)=>{
    res.render('meat/show.ejs', {recipe: currentmeat})
  })
})

//EDIT
router.get('/:id/edit', (req, res)=>{
  Meat.findById(req.params.id, (err, currentmeat)=>{
    res.render('meat/edit.ejs', {recipe: currentmeat})
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
    res.redirect('/recipes/meat')
  })
})


module.exports = router
