const mongoose = require('mongoose')

const vegSchema = new mongoose.Schema ({
  name: String,
  img: String,
  link: String,
  cookTime: Number,
  type: String,
  base: String,
  genre: String,
  comments: String
})

const vegCollection = mongoose.model('Veggie', vegSchema)

module.exports = vegCollection