const mongoose = require('mongoose')

const seafoodSchema = new mongoose.Schema ({
  name: String,
  img: String,
  link: String,
  cookTime: Number,
  type: String,
  base: String,
  genre: String,
  comments: String
})

const seafoodCollection = mongoose.model('Seafood', seafoodSchema)

module.exports = seafoodCollection