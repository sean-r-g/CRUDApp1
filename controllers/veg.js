const express = require('express')
const router = express.Router()
// const VegList = require('../models/vegdb.js')
const Veg = require('../models/veg.js')


//SEED 
router.get('/seed', (req, res)=>{
  vegs.create(VegList, (err, allVeg)=>{
    res.redirect('/')
  })
})

//INDEX
router.get('/', (req, res)=>{
  Veg.find({}, (err, allVeg)=>{
    res.render('veg/index.ejs', {veg: allVeg})
  })
})

//NEW
router.get('/new', (req, res)=>{
    res.render('veg/new.ejs')
})


//SHOW
router.get('/:id', (req, res)=>{
  Veg.findById(req.params.id, (err, currentveg)=>{
    res.render('veg/show.ejs', {veg: currentveg})
  })
})

//EDIT
router.get('/:id/edit', (req, res)=>{
  Veg.findById(req.params.id, (err, currentveg)=>{
    res.render('veg/edit.ejs', {veg: currentveg})
  })
})

//CREATE 
router.post('/', (req, res)=>{
  Veg.create(req.body)
  res.redirect('/')
  // res.send(req.body)
})

//UPDATE
router.put('/:id', (req, res)=>{
  Veg.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedItem)=>{
    res.redirect('/')
  })
})

//DELETE
router.delete('/:id', (req, res)=>{
  Veg.findByIdAndDelete(req.params.id, (err, data)=>{
    res.redirect('/')
  })
})


module.exports = router