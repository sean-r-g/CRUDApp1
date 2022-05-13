const express = require('express')
const router = express.Router()
// const poultryList = require('../models/poultrydb.js')
const Poultry = require('../models/poultry.js')


//SEED 
router.get('/seed', (req, res)=>{
  Poultry.create(poultryList, (err, allPoultry)=>{
    res.redirect('/recipes/poultry')
  })
})

//INDEX
router.get('/', (req, res)=>{
  Poultry.find({}, (err, allPoultry)=>{
    res.render('poultry/index.ejs', {recipe: allPoultry})
  })
})

//NEW
router.get('/new', (req, res)=>{
    res.render('poultry/new.ejs')
})


//SHOW
router.get('/:id', (req, res)=>{
  Poultry.findById(req.params.id, (err, currentpoultry)=>{
    res.render('poultry/show.ejs', {recipe: currentpoultry})
  })
})

//EDIT
router.get('/:id/edit', (req, res)=>{
  Poultry.findById(req.params.id, (err, currentpoultry)=>{
    res.render('poultry/edit.ejs', {recipe: currentpoultry})
  })
})

//CREATE 
router.post('/', (req, res)=>{
  Poultry.create(req.body)
  res.redirect('/recipes/poultry')
  // res.send(req.body)
})

//UPDATE
router.put('/:id', (req, res)=>{
  Poultry.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedItem)=>{
    res.redirect('/recipes/poultry')
  })
})

//DELETE
router.delete('/:id', (req, res)=>{
  Poultry.findByIdAndDelete(req.params.id, (err, data)=>{
    res.redirect('/recipes/poultry')
  })
})


module.exports = router