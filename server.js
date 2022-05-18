//___________________
//Dependencies
//___________________
const express = require('express');
const session = require('express-session')
const bcrypt = require('bcrypt')
const res = require('express/lib/response');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
require('dotenv').config()
const meatController = require('./controllers/meat.js')
const poultryController = require('./controllers/poultry.js')
const seafoodController = require('./controllers/seafood.js')
const vegController = require('./controllers/veg.js')
const userController = require('./controllers/users.js')
const sessionsController = require('./controllers/sessions.js')

const hashedString = bcrypt.hashSync('yourStringHere', bcrypt.genSaltSync(10))
bcrypt.compareSync('yourGuessHere', hashedString)

//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT

//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to Mongo &
// Fix Depreciation Warnings from Mongoose
// May or may not need these depending on your Mongoose version
mongoose.connect(MONGODB_URI , () => {
  console.log('connected to mongo');
});

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//___________________
//Middleware
//___________________

//use public folder for static assets
app.use(express.static('public'));
// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project

//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form


app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
  })
)

//___________________
// Controllers
//___________________
//localhost:3000
app.get('/', (req, res)=>{
  res.redirect('/recipes')
})
app.get('/recipes' , (req, res) => {
  res.render('index.ejs', {currentUser: req.session.currentUser})
});
app.get('/recipes/users/new', (req, res)=>{
  res.render('users/new.ejs', {currentUser: req.session.currentUser})
})
app.get('/recipes/sessions/new', (req,res)=>{
  res.render('sessions/new.ejs', {currentUser: req.session.currentUser})
})
app.use('/recipes/meat', meatController)
app.use('/recipes/poultry', poultryController)
app.use('/recipes/seafood', seafoodController)
app.use('/recipes/vegetarian', vegController)
app.use('/recipes/users', userController)
app.use('/recipes/sessions', sessionsController)




///////////////////////////

//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));