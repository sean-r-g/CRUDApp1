const mongoose = require('mongoose')

const poultrySchema = new mongoose.Schema ({
  name: String,
  link: String,
  cookTime: Number,
  type: String,
  base: String,
  genre: String,
  comments: String
})

const poultryCollection = mongoose.model('Poultry', poultrySchema)

module.exports = poultryCollection