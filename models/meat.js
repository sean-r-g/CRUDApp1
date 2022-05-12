const mongoose = require('mongoose')

const meatSchema = new mongoose.Schema ({
  name: String,
  link: String,
  cookTime: Number,
  type: String,
  base: String,
  genre: String,
  comments: String
})

const meatCollection = mongoose.model('Meat', meatSchema)

module.exports = meatCollection