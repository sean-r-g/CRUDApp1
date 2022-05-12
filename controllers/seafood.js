const express = require('express')
const router = express.Router()
// const seafoodList = require('../models/seafooddb.js')
const Seafood = require('../models/seafood.js')


//SEED 
router.get('/seed', (req, res)=>{
  Seafood.create(seafoodList, (err, allSeafood)=>{
    res.redirect('/')
  })
})

//INDEX
router.get('/', (req, res)=>{
  Seafood.find({}, (err, allSeafood)=>{
    res.render('seafood/index.ejs', {seafood: allSeafood})
  })
})

//NEW
router.get('/new', (req, res)=>{
    res.render('seafood/new.ejs')
})


//SHOW
router.get('/:id', (req, res)=>{
  Seafood.findById(req.params.id, (err, currentseafood)=>{
    res.render('seafood/show.ejs', {seafood: currentseafood})
  })
})

//EDIT
router.get('/:id/edit', (req, res)=>{
  Seafood.findById(req.params.id, (err, currentseafood)=>{
    res.render('seafood/edit.ejs', {seafood: currentseafood})
  })
})

//CREATE 
router.post('/', (req, res)=>{
  Seafood.create(req.body)
  res.redirect('/')
  // res.send(req.body)
})

//UPDATE
router.put('/:id', (req, res)=>{
  Seafood.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedItem)=>{
    res.redirect('/')
  })
})

//DELETE
router.delete('/:id', (req, res)=>{
  Seafood.findByIdAndDelete(req.params.id, (err, data)=>{
    res.redirect('/')
  })
})


module.exports = router