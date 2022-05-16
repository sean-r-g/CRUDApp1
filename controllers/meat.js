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

const allCollections = [
  '/meat/',
  '/poultry/',
  '/seafood/',
  '/vegetarian/'
]

const meatIds = [
  // Meat IDs
  '627e61e62bb57b0582eebacf',
  '627e61e62bb57b0582eebad0',
  '627e61e62bb57b0582eebace',
  '627e61e62bb57b0582eebad2',
  '627e61e62bb57b0582eebad1'
]
const poultryIds = [
  // Poultry IDs
  '627eb0d0d4db37aebf5d184c',
  '627eb0d0d4db37aebf5d184b',
  '627eb0d0d4db37aebf5d184d',
  '627eb0d0d4db37aebf5d184f',
  '627eb0d0d4db37aebf5d1850',
  '627eb0d0d4db37aebf5d184e'
]
  // Seafood IDs 
const seafoodIds = [
  '627fae3e3cb27533adf95980',
  '627fae3e3cb27533adf9597f',
  '627fae3e3cb27533adf9597e',
  '627fae3e3cb27533adf95982',
  '627fae3e3cb27533adf95983',
  '627fae3e3cb27533adf95981'
]
  // Vegetarian IDs 
const vegIds = [
  '627fb6fb4cfc08bf0a6fe29c',
  '627fb6fb4cfc08bf0a6fe29e',
  '627fb6fb4cfc08bf0a6fe29d',
  '627fb6fb4cfc08bf0a6fe2a1',
  '627fb6fb4cfc08bf0a6fe2a0',
  '627fb6fb4cfc08bf0a6fe29f'
]

const randomizeCollection = (collections) => {
  for (let i = 0; i < collections.length; i++) {
    let selectedCollection = collections[Math.floor(Math.random() * collections.length)]
    return selectedCollection
  }
}
const randomCollection = randomizeCollection(allCollections)

const randomizeId = (idArray) => {
  for (let i = 0; i < idArray.length; i++) {
    let selectedId = idArray[Math.floor(Math.random() * idArray.length)]
    return selectedId
  }
}

let randomId = null

if (randomCollection == '/meat/') {
  randomId = randomizeId(meatIds)
} else if (randomCollection == '/poultry/') {
  randomId = randomizeId(poultryIds)
} else if (randomCollection == '/seafood/') {
  randomId = randomizeId(seafoodIds)
} else {
  randomId = randomizeId(vegIds)
}

const randomizeRecipe = `${randomCollection}${randomId}`

console.log(randomizeRecipe);